/* ==========================================================================
   The Battle for Better Air — Chatbot UI Logic
   ========================================================================== */

(function() {
  'use strict';

  const SVG_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`;
  const CLOSE_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
  const SEND_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>`;

  let chatContainer, chatMascot, chatPanel, chatBody, chatInput, chatSend, mascotBubble;
  let poseInterval = null;
  let history = JSON.parse(sessionStorage.getItem('chat_history') || '[]');
  
  // Context tracking
  let lastConcern = null;
  let lastDimensions = null;
  
  // Concern mapping
  const CONCERN_MAP = {
    allergies: ['allergies', 'allergy', 'pollen', 'hay fever', 'sneezing', 'allergic', 'dust mites', 'histamine'],
    smoke: ['smoke', 'wildfire', 'smoky', 'fire', 'ash', 'cigarette', 'cooking'],
    pets: ['pets', 'pet', 'dog', 'cat', 'dander', 'fur', 'hair', 'animal'],
    dust: ['dust', 'dusty', 'particles'],
    vocs: ['vocs', 'voc', 'chemicals', 'odor', 'smells', 'smell', 'paint', 'off-gas', 'formaldehyde'],
    asthma: ['asthma', 'asthmatic', 'breathing', 'respiratory', 'lung']
  };

  function init() {
    injectUI();
    bindEvents();
    
    if (history.length === 0) {
      addMessage('bot', "Greetings! I'm Dr. Breathewell, your air quality specialist. I've spent decades studying indoor air — pollen, smoke, dust, allergens, the works. Tell me your room size and your concern, and I'll size the right purifier for your space. Or ask me anything about CADR, HEPA filters, or specific air quality issues. What can I help you investigate?");
    } else {
      renderHistory();
    }
  }

  function injectUI() {
    chatContainer = document.createElement('div');
    chatContainer.id = 'chat-container';
    chatContainer.innerHTML = `
      <div id="bba-mascot" class="mascot-container" aria-label="Open Chat Assistant" role="button" tabindex="0">
        <img src="images/mascot-icon.png?v=2" class="mascot-pose pose-icon is-active" alt="Dr. Breathewell">
        <img src="images/mascot-header.png?v=2" class="mascot-pose pose-header" alt="Dr. Breathewell">
        <img src="images/mascot-thinking.png?v=2" class="mascot-pose pose-thinking" alt="Dr. Breathewell">
        <div class="mascot-bubble">Ask me any questions you need!</div>
      </div>
      <div class="chat-panel" role="dialog" aria-label="Chat Assistant">
        <header class="chat-header">
          <div class="chat-header__title" style="display: flex; align-items: center; gap: 12px;">
            <div style="width: 48px; height: 48px; border-radius: 50%; background-image: url('images/mascot-header.png?v=2'); background-size: cover; background-position: center top; background-repeat: no-repeat; border: 2px solid var(--chat-primary); flex-shrink: 0;"></div>
            <div style="display: flex; flex-direction: column; line-height: 1.2;">
              <span style="font-size: 1.1rem; font-weight: 600;">Dr. Breathewell</span>
              <span style="font-size: 0.8rem; color: var(--chat-text-dim); font-family: 'Inter', sans-serif;">Air Quality Specialist</span>
            </div>
          </div>
          <button class="chat-close" aria-label="Close Chat" style="display:flex; align-items:center; gap:6px; background: rgba(255,255,255,0.1); padding: 6px 12px; border-radius: 20px; font-size: 0.85rem; font-weight: 500; color: #f8fafc; border: 1px solid rgba(255,255,255,0.2);">
            <span>Close</span>
            ${CLOSE_ICON}
          </button>
        </header>
        <div class="chat-body" id="chat-body"></div>
        <footer class="chat-footer">
          <input type="text" class="chat-input" placeholder="Ask a question..." aria-label="Chat input">
          <button class="chat-send" aria-label="Send message">
            ${SEND_ICON}
          </button>
        </footer>
      </div>
    `;
    document.body.appendChild(chatContainer);

    chatMascot = chatContainer.querySelector('#bba-mascot');
    mascotBubble = chatMascot.querySelector('.mascot-bubble');
    chatPanel  = chatContainer.querySelector('.chat-panel');
    chatBody   = chatContainer.querySelector('.chat-body');
    chatInput  = chatContainer.querySelector('.chat-input');
    chatSend   = chatContainer.querySelector('.chat-send');
    
    initMascot();
  }

  function initMascot() {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasWalkedIn = sessionStorage.getItem('drbreathewell_walkin');
    
    if (!hasWalkedIn) {
      if (!prefersReduced) {
        chatMascot.style.transform = 'translateX(120%)';
        setTimeout(() => {
          chatMascot.style.transform = '';
          chatMascot.classList.add('mascot-walk-in');
          setTimeout(() => {
            if (!sessionStorage.getItem('chat_opened')) {
              showBubble();
            }
          }, 2000);
        }, 800);
      } else {
        chatMascot.style.opacity = '0';
        setTimeout(() => { 
          chatMascot.style.opacity = '1'; 
          if (!sessionStorage.getItem('chat_opened')) showBubble();
        }, 100);
      }
      sessionStorage.setItem('drbreathewell_walkin', 'true');
    } else {
      chatMascot.classList.add('mascot-idle');
      if (!sessionStorage.getItem('chat_opened') && !chatPanel.classList.contains('is-active')) {
        setTimeout(showBubble, 1500);
      }
    }
    
    chatMascot.addEventListener('animationend', (e) => {
      if (e.animationName === 'mascot-walk') {
        chatMascot.classList.remove('mascot-walk-in');
        if (!prefersReduced) chatMascot.classList.add('mascot-idle');
      }
    });

    if (!prefersReduced) {
      startPoseCycling();
    }
  }

  function showBubble() {
    mascotBubble.classList.add('show-bubble');
  }

  function dismissBubble() {
    if (mascotBubble.classList.contains('show-bubble')) {
      mascotBubble.classList.remove('show-bubble');
    }
  }

  function startPoseCycling() {
    const poses = chatMascot.querySelectorAll('.mascot-pose');
    let currentPose = 0;
    const times = [3000, 3000, 2000];
    
    function nextPose() {
      if (chatPanel.classList.contains('is-active')) return;
      poses[currentPose].classList.remove('is-active');
      currentPose = (currentPose + 1) % poses.length;
      poses[currentPose].classList.add('is-active');
      poseInterval = setTimeout(nextPose, times[currentPose]);
    }
    poseInterval = setTimeout(nextPose, times[0]);
  }

  function bindEvents() {
    chatMascot.addEventListener('click', () => {
      dismissBubble();
      toggleChat();
    });
    chatContainer.querySelector('.chat-close').addEventListener('click', toggleChat);
    
    chatSend.addEventListener('click', handleSend);
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handleSend();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && chatPanel.classList.contains('is-active')) {
        toggleChat();
      }
    });
  }

  function toggleChat() {
    const isActive = chatPanel.classList.contains('is-active');
    chatPanel.classList.toggle('is-active');
    
    if (isActive) {
      chatMascot.style.opacity = '1';
      chatMascot.style.pointerEvents = 'auto';
      // if they haven't used it, maybe show bubble again? No, once opened, it stays hidden.
    } else {
      sessionStorage.setItem('chat_opened', 'true');
      chatMascot.style.opacity = '0';
      chatMascot.style.pointerEvents = 'none';
      setTimeout(() => chatInput.focus(), 250);
      
      if (poseInterval) {
        clearTimeout(poseInterval);
        poseInterval = null;
      }
    }
    
    if (isActive && window.matchMedia && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      startPoseCycling();
    }
  }

  function handleSend() {
    const text = chatInput.value.trim();
    if (!text) return;

    addMessage('user', text);
    chatInput.value = '';
    
    showTyping();
    const delay = Math.floor(Math.random() * 400) + 400; // 400-800ms
    setTimeout(() => {
      hideTyping();
      processIntent(text);
    }, delay);
  }

  let typingIndicator = null;
  function showTyping() {
    if (typingIndicator) return;
    typingIndicator = document.createElement('div');
    typingIndicator.className = 'chat-msg chat-msg--bot chat-msg--typing';
    typingIndicator.innerHTML = `
      <div class="chat-msg__avatar typing-avatar"></div>
      <div class="chat-msg__text">
        <span style="color: var(--chat-text-dim); font-size: 0.9rem; font-style: italic; margin-right: 6px;">Dr. Breathewell is analyzing</span>
        <span class="dot"></span><span class="dot"></span><span class="dot"></span>
      </div>
    `;
    chatBody.appendChild(typingIndicator);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function hideTyping() {
    if (typingIndicator) {
      typingIndicator.remove();
      typingIndicator = null;
    }
  }

  function addMessage(sender, text, links = [], isHtml = false) {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const msg = { sender, text, time, links, isHtml };
    
    history.push(msg);
    sessionStorage.setItem('chat_history', JSON.stringify(history));
    
    renderMessage(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function renderMessage(msg) {
    const div = document.createElement('div');
    div.className = `chat-msg chat-msg--${msg.sender}`;
    
    let showAvatar = false;
    if (msg.sender === 'bot') {
      const msgIndex = history.indexOf(msg);
      if (msgIndex === 0) {
        showAvatar = true;
      } else if (msgIndex > 0) {
        showAvatar = history[msgIndex - 1].sender !== 'bot';
      }
    }

    let avatar = '';
    if (msg.sender === 'bot' && showAvatar) {
      avatar = `<div class="chat-msg__avatar bot-avatar"></div>`;
    }

    let textHtml = msg.text;

    if (msg.sender === 'bot') {
      if (!msg.isHtml) {
        textHtml = textHtml
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#039;");
        
        textHtml = textHtml.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, label, url) => {
          let cleanUrl = url.trim();
          if (cleanUrl.includes(':') && !cleanUrl.startsWith('http://') && !cleanUrl.startsWith('https://')) {
            return match;
          }
          return `<a href="${cleanUrl}" class="chatbot-link">${label}</a>`;
        });
      }
    } else if (msg.sender === 'user') {
      textHtml = textHtml
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    }

    if (msg.links && msg.links.length > 0) {
      let linksHtml = '<div class="chat-msg__links" style="margin-top: 10px; display: flex; flex-direction: column; gap: 6px;">';
      msg.links.forEach(l => {
        let cleanHref = l.href.trim();
        if (!cleanHref.includes(':') || cleanHref.startsWith('http://') || cleanHref.startsWith('https://')) {
          linksHtml += `<a href="${cleanHref}" class="chatbot-link" style="font-weight: 500;">${l.text} &rarr;</a>`;
        }
      });
      linksHtml += '</div>';
      textHtml += linksHtml;
    }

    div.innerHTML = `
      ${avatar}
      <div class="chat-msg__text">${textHtml}</div>
      <span class="chat-msg__time">${msg.time}</span>
    `;
    
    chatBody.appendChild(div);
  }

  function renderHistory() {
    history.forEach(renderMessage);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  // --- NLP Engine ---

  function extractConcern(text) {
    const lower = text.toLowerCase();
    for (const [concern, keywords] of Object.entries(CONCERN_MAP)) {
      for (const keyword of keywords) {
        if (new RegExp('\\b' + keyword + '\\b').test(lower)) {
          return concern;
        }
      }
    }
    return null;
  }

  function extractDimensions(text) {
    const lower = text.toLowerCase();
    let area = null;
    let desc = "";

    // Pattern 1: LxW
    const dimMatch = lower.match(/(\\d+)\\s*(?:x|by|\\*)\\s*(\\d+)/);
    if (dimMatch) {
      area = parseInt(dimMatch[1]) * parseInt(dimMatch[2]);
      desc = `${dimMatch[1]}x${dimMatch[2]} foot`;
    }

    // Pattern 2: SqFt
    const sqftMatch = lower.match(/(\\d+)\\s*(?:sqft|sq ft|square feet|square foot)/);
    if (!area && sqftMatch) {
      area = parseInt(sqftMatch[1]);
      desc = `${area} sq. ft.`;
    }

    if (!area) return null;

    // Detect ceiling
    let height = 8;
    const heightMatch = lower.match(/(\\d+)\\s*(?:ft|foot|feet)?\\s*(?:ceiling|ceilings|tall|high)/);
    if (heightMatch) {
      height = parseInt(heightMatch[1]);
    } else if (lower.includes('vaulted')) {
      height = 10;
    }

    // Detect room type
    let roomType = "room";
    if (lower.includes("bedroom")) roomType = "bedroom";
    else if (lower.includes("living room")) roomType = "living room";
    else if (lower.includes("basement")) roomType = "basement";
    else if (lower.includes("office")) roomType = "office";

    return { area, height, desc: `${desc} ${roomType}` };
  }

  function matchIntent(text) {
    if (!window.AIRBOT_KB) return null;
    
    const lower = text.toLowerCase();
    let bestMatch = null;
    let bestScore = 0;

    for (const category of Object.values(window.AIRBOT_KB)) {
      for (const entry of category) {
        let score = 0;
        for (const trigger of entry.triggers) {
          if (new RegExp('\\b' + trigger + '\\b', 'i').test(lower)) {
            score++;
          }
        }
        if (score > bestScore) {
          bestScore = score;
          bestMatch = entry;
        }
      }
    }

    return bestScore >= 1 ? bestMatch : null;
  }

  function trackAnalytics(text, intentId) {
    if (typeof gtag === 'function') {
      gtag('event', 'chatbot_query', { 
        query_text: text.substring(0, 100), 
        matched_intent: intentId 
      });
    } else {
      console.log('Analytics Event:', 'chatbot_query', { query_text: text.substring(0, 100), matched_intent: intentId });
    }
  }

  function processIntent(text) {
    const concern = extractConcern(text);
    if (concern) lastConcern = concern;

    const dims = extractDimensions(text);
    if (dims) lastDimensions = dims;

    // 1. Check if Sizing Request
    // It is a sizing request if we have BOTH dimensions and concern in context,
    // AND the current message provided at least one of them.
    if (lastDimensions && lastConcern && (dims || concern)) {
      handleSizing(lastDimensions, lastConcern);
      trackAnalytics(text, 'sizing_request');
      return;
    }

    // 2. Intent Match
    const intent = matchIntent(text);
    if (intent) {
      addMessage('bot', intent.answer, intent.internalLinks);
      trackAnalytics(text, intent.id);
      
      let nextActionDelay = 600;
      if (intent.followUp) {
        showTyping();
        setTimeout(() => {
          hideTyping();
          addMessage('bot', intent.followUp);
        }, nextActionDelay);
        nextActionDelay += 600;
      } else if (concern && !lastDimensions) {
        // Proactive product offer
        showTyping();
        setTimeout(() => {
          hideTyping();
          addMessage('bot', "Want me to recommend specific purifiers? Just tell me your room size — for example, '12 by 14' — and I'll match products to your space.");
        }, nextActionDelay);
      }
      return;
    }

    // 3. Fallback
    const fallbackText = "I'm not sure I have a great answer for that. You might find what you need in our [Guides hub](guides.html), or use the [calculator above](#calculator) to size a purifier for your space. You can also ask me about CADR, HEPA filters, allergies, smoke, pets, or sizing for a specific room.";
    addMessage('bot', fallbackText);
    trackAnalytics(text, 'fallback');
  }

  function handleSizing(dims, concern) {
    let ach = 4;
    let reasoning = "4 air changes per hour is the standard baseline for keeping indoor air fresh and reducing general dust.";
    
    if (['allergies', 'pets'].includes(concern)) {
      ach = 5;
      reasoning = "5 air changes per hour is recommended to effectively capture airborne allergens and dander before they settle.";
    } else if (['smoke', 'asthma'].includes(concern)) {
      ach = 6;
      reasoning = "6 air changes per hour is required to rapidly clear fine particles and provide safe air for sensitive respiratory needs.";
    }

    const volume = dims.area * dims.height;
    const cfm = (volume * ach) / 60;
    const cadr = cfm * 1.55;

    const response = `For a ${dims.desc} with ${dims.height}ft ceilings and ${concern} concerns, you need a CADR of approximately ${Math.round(cadr)}. ${reasoning}`;
    
    addMessage('bot', response);
    
    showTyping();
    setTimeout(() => {
      hideTyping();
      recommendProducts(cadr, concern);
    }, 600);
  }

  function recommendProducts(requiredCadr, concern) {
    if (!window.AIRBOT_PRODUCTS) {
      addMessage('bot', "*(Product recommendations unavailable right now. Try the calculator above!)*");
      return;
    }

    const products = window.AIRBOT_PRODUCTS;
    const tag = window.AIRBOT_AMAZON_TAG || 'roomairsizer-20';
    
    // 1. Filter by concern
    let concernMatches = products.filter(p => p.concerns.includes(concern));
    if (concernMatches.length === 0) concernMatches = products;

    // 2. Filter by CADR and sort
    let sizeMatches = concernMatches.filter(p => p.cadr >= requiredCadr);
    sizeMatches.sort((a, b) => a.cadr - b.cadr);

    // 3. Take top 2
    let recommended = sizeMatches.slice(0, 2);

    // 4. Supplement if fewer than 2 matches
    if (recommended.length < 2) {
      const remainingNeeded = 2 - recommended.length;
      // Get all products, sort by CADR descending to get the largest ones
      const sortedByLargest = [...products].sort((a, b) => b.cadr - a.cadr);
      for (const p of sortedByLargest) {
        if (!recommended.find(r => r.asin === p.asin)) {
          recommended.push(p);
          if (recommended.length >= 2) break;
        }
      }
    }

    if (!sessionStorage.getItem('chat_disclosure')) {
      addMessage('bot', '<div class="chat-disclosure">Quick heads up: product links below are Amazon affiliate links. We may earn a small commission if you buy — at no extra cost to you. Our picks are based on CADR math, not commission rates.</div>', [], true);
      sessionStorage.setItem('chat_disclosure', 'true');
    }

    // Render Products
    let html = '';
    recommended.forEach(p => {
      const link = `https://www.amazon.com/dp/${p.asin}/ref=nosim?tag=${tag}`;
      const concernCopy = p.concernFit[concern] || p.concernFit['dust'] || 'A reliable choice for general air quality.';
      
      const gaEvent = `gtag('event', 'chatbot_affiliate_click', { product_name: '${p.name.replace(/'/g, "\\'")}', product_asin: '${p.asin}', required_cadr: ${Math.round(requiredCadr)}, concern: '${concern}' });`;
      const onClickStr = typeof gtag === 'function' ? `onclick="${gaEvent}"` : '';

      html += `
        <div class="chatbot-product-card">
          <h4 class="chatbot-product-card__name">${p.name}</h4>
          <div class="chatbot-product-card__stats">CADR: ${p.cadr} | Price: ${p.priceTier}</div>
          <div class="chatbot-product-card__desc">${p.bestFor}</div>
          <div class="chatbot-product-card__fit">${concernCopy}</div>
          <a href="${link}" target="_blank" rel="noopener sponsored nofollow" class="chatbot-product-card__btn" ${onClickStr}>Check Price on Amazon</a>
        </div>
      `;
    });

    addMessage('bot', html, [], true);

    // Fallback message for large rooms
    if (sizeMatches.length < 2) {
      setTimeout(() => {
        addMessage('bot', "Your room is on the larger side — you may want two purifiers running simultaneously, or a single unit with even higher CADR than what we currently track. Use the calculator above for a full breakdown.");
      }, 600);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
