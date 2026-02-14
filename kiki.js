// kiki.js — Acadryx's friendly mascot
// Version 0.1 — "The Walker"
// Created by Simeon, 16, with a little help from his AI friends

(function() {
  // ---------- KIKI'S CONFIG ----------
  const KIKI_CONFIG = {
    name: "Kiki",
    color: "rgb(13, 124, 150)", // matches your accent
    size: 60,
    position: "bottom-right", // or "bottom-left"
    autoWave: true,
    autoWalk: true,
    messages: [
      "👋 Hey! I'm Kiki.",
      "🏫 I live inside Acadryx.",
      "🚀 Built by Simeon when he was 16.",
      "✨ Click me anytime.",
      "📚 Your school, your space.",
      "💙 I love seeing results get published!",
      "🤔 Need help? Just ask!",
      "🎉 KIS was my first school!",
      "🌍 We're going global, slowly.",
      "⚡ Minimal friction, maximum feelings."
    ],
    walkMessages: [
      "🚶‍♂️ Just walking around...",
      "👀 Watching you build...",
      "💭 Thinking about schools...",
      "📝 Remembering my first day at KIS..."
    ]
  };

  // ---------- CREATE KIKI ----------
  function createKiki() {
    // Check if Kiki already exists
    if (document.getElementById('kiki-mascot')) return;

    // Create container
    const kiki = document.createElement('div');
    kiki.id = 'kiki-mascot';
    kiki.setAttribute('aria-label', `${KIKI_CONFIG.name} the Acadryx mascot`);
    kiki.setAttribute('role', 'button');
    kiki.setAttribute('tabindex', '0');
    
    // Create the character
    kiki.innerHTML = `
      <div class="kiki-character">
        <div class="kiki-face">
          <div class="kiki-eyes">
            <div class="kiki-eye left"></div>
            <div class="kiki-eye right"></div>
          </div>
          <div class="kiki-smile"></div>
        </div>
        <div class="kiki-cap">
          <div class="kiki-cap-top"></div>
          <div class="kiki-cap-bill"></div>
        </div>
        <div class="kiki-shadow"></div>
      </div>
      <div class="kiki-bubble" style="display: none;">
        <span class="kiki-bubble-text"></span>
        <div class="kiki-bubble-tail"></div>
      </div>
    `;

    // Add styles
    const style = document.createElement('style');
    style.textContent = `
      #kiki-mascot {
        position: fixed;
        ${KIKI_CONFIG.position === 'bottom-right' ? 'right: 20px; bottom: 20px;' : 'left: 20px; bottom: 20px;'}
        width: ${KIKI_CONFIG.size}px;
        height: ${KIKI_CONFIG.size}px;
        z-index: 9999;
        cursor: pointer;
        user-select: none;
        transition: transform 0.2s ease;
        font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
      }

      #kiki-mascot:hover {
        transform: scale(1.1);
      }

      #kiki-mascot:active {
        transform: scale(0.95);
      }

      .kiki-character {
        position: relative;
        width: 100%;
        height: 100%;
      }

      .kiki-face {
        position: absolute;
        width: 70%;
        height: 60%;
        background: ${KIKI_CONFIG.color};
        border-radius: 50% 50% 45% 45%;
        bottom: 0;
        left: 15%;
        box-shadow: 0 4px 0 rgba(0,0,0,0.1);
      }

      .kiki-eyes {
        position: absolute;
        top: 30%;
        width: 100%;
        display: flex;
        justify-content: space-around;
        padding: 0 20%;
      }

      .kiki-eye {
        width: 20%;
        height: 30%;
        background: white;
        border-radius: 50%;
        position: relative;
      }

      .kiki-eye::after {
        content: '';
        position: absolute;
        width: 40%;
        height: 40%;
        background: #0B0B1F;
        border-radius: 50%;
        top: 30%;
        left: 30%;
        animation: blink 4s infinite;
      }

      @keyframes blink {
        0%, 90%, 100% { height: 40%; top: 30%; }
        95% { height: 10%; top: 45%; }
      }

      .kiki-smile {
        position: absolute;
        width: 40%;
        height: 20%;
        border-bottom: 3px solid rgba(0,0,0,0.2);
        border-radius: 50%;
        bottom: 20%;
        left: 30%;
      }

      .kiki-cap {
        position: absolute;
        top: -5px;
        left: 25%;
        width: 50%;
        height: 30%;
      }

      .kiki-cap-top {
        width: 100%;
        height: 70%;
        background: var(--primary, rgb(11, 41, 190));
        border-radius: 50% 50% 0 0;
      }

      .kiki-cap-bill {
        width: 120%;
        height: 30%;
        background: var(--primary-dark, rgb(8, 30, 140));
        border-radius: 40% 40% 0 0;
        margin-left: -10%;
      }

      .kiki-shadow {
        position: absolute;
        width: 80%;
        height: 10%;
        background: rgba(0,0,0,0.1);
        border-radius: 50%;
        bottom: -15%;
        left: 10%;
        filter: blur(2px);
      }

      .kiki-bubble {
        position: absolute;
        bottom: 70px;
        right: 0;
        max-width: 200px;
        background: white;
        padding: 10px 15px;
        border-radius: 20px 20px 4px 20px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        font-size: 14px;
        color: #1A2E3C;
        border: 1px solid #E2E8F0;
        animation: bubblePop 0.3s ease;
        z-index: 10000;
      }

      #kiki-mascot[data-position="bottom-left"] .kiki-bubble {
        right: auto;
        left: 0;
        border-radius: 20px 20px 20px 4px;
      }

      .kiki-bubble-tail {
        position: absolute;
        bottom: -8px;
        right: 10px;
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 10px solid white;
        filter: drop-shadow(1px 2px 1px rgba(0,0,0,0.05));
      }

      #kiki-mascot[data-position="bottom-left"] .kiki-bubble-tail {
        right: auto;
        left: 10px;
      }

      @keyframes bubblePop {
        0% { transform: scale(0.8); opacity: 0; }
        100% { transform: scale(1); opacity: 1; }
      }

      @keyframes walk {
        0%, 100% { transform: translateX(0) rotate(0deg); }
        25% { transform: translateX(3px) rotate(2deg); }
        75% { transform: translateX(-3px) rotate(-2deg); }
      }

      #kiki-mascot.walking {
        animation: walk 0.5s infinite;
      }

      @keyframes wave {
        0%, 100% { transform: rotate(0deg); }
        25% { transform: rotate(15deg); }
        75% { transform: rotate(-5deg); }
      }

      #kiki-mascot.waving .kiki-character {
        animation: wave 0.5s ease;
      }

      /* Mobile adjustments */
      @media (max-width: 600px) {
        #kiki-mascot {
          width: 50px;
          height: 50px;
          bottom: 10px;
          right: 10px;
        }
        .kiki-bubble {
          max-width: 150px;
          font-size: 12px;
          bottom: 60px;
        }
      }
    `;

    document.head.appendChild(style);
    document.body.appendChild(kiki);
    
    return kiki;
  }

  // ---------- KIKI'S BEHAVIORS ----------
  const Kiki = {
    element: null,
    bubble: null,
    bubbleText: null,
    messageQueue: [],
    isWalking: false,
    isWaving: false,
    walkInterval: null,

    init() {
      this.element = createKiki();
      this.bubble = this.element.querySelector('.kiki-bubble');
      this.bubbleText = this.element.querySelector('.kiki-bubble-text');
      
      this.setupEventListeners();
      this.startBehaviors();
      
      // Welcome message after 1 second
      setTimeout(() => this.speak("👋 Hi! I'm Kiki!"), 1000);
    },

    setupEventListeners() {
      // Click handler
      this.element.addEventListener('click', (e) => {
        e.stopPropagation();
        this.handleClick();
      });

      // Hover wave
      this.element.addEventListener('mouseenter', () => {
        this.wave();
      });

      // Keyboard accessibility
      this.element.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.handleClick();
        }
      });
    },

    startBehaviors() {
      // Auto-wave on page load
      if (KIKI_CONFIG.autoWave) {
        setTimeout(() => this.wave(), 2000);
      }

      // Auto-walk randomly
      if (KIKI_CONFIG.autoWalk) {
        this.walkInterval = setInterval(() => {
          if (Math.random() > 0.7) { // 30% chance every 8 seconds
            this.startWalking();
            setTimeout(() => this.stopWalking(), 2000);
          }
        }, 8000);
      }

      // Random messages when idle
      setInterval(() => {
        if (this.bubble.style.display === 'none' && Math.random() > 0.8) {
          const randomMessage = KIKI_CONFIG.messages[
            Math.floor(Math.random() * KIKI_CONFIG.messages.length)
          ];
          this.speak(randomMessage, 3000);
        }
      }, 15000);
    },

    handleClick() {
      this.wave();
      
      // Queue different messages based on context
      const messages = [
        "You clicked me! 😊",
        "Hey there!",
        "I'm Kiki, your guide!",
        "Simeon built me!",
        "Ask me anything!",
        "🏫 Schools are my home!",
        ...KIKI_CONFIG.messages
      ];
      
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      this.speak(randomMessage, 4000);
    },

    speak(message, duration = 3000) {
      if (!this.bubble || !this.bubbleText) return;
      
      this.bubbleText.textContent = message;
      this.bubble.style.display = 'block';
      
      // Clear any existing timeout
      if (this.speakTimeout) clearTimeout(this.speakTimeout);
      
      // Hide after duration
      this.speakTimeout = setTimeout(() => {
        if (this.bubble) {
          this.bubble.style.display = 'none';
        }
      }, duration);
    },

    wave() {
      if (this.isWaving) return;
      
      this.isWaving = true;
      this.element.classList.add('waving');
      
      setTimeout(() => {
        this.element.classList.remove('waving');
        this.isWaving = false;
      }, 500);
    },

    startWalking() {
      if (this.isWalking) return;
      
      this.isWalking = true;
      this.element.classList.add('walking');
      
      // Maybe say something while walking
      const walkMsg = KIKI_CONFIG.walkMessages[
        Math.floor(Math.random() * KIKI_CONFIG.walkMessages.length)
      ];
      this.speak(walkMsg, 2000);
    },

    stopWalking() {
      this.isWalking = false;
      this.element.classList.remove('walking');
    },

    // Custom method for you, Simeon
    celebrate() {
      this.wave();
      this.speak("🎉 Wohoo! Another school joined!", 4000);
      
      // Do a little spin
      this.element.style.transform = 'rotate(360deg)';
      setTimeout(() => {
        this.element.style.transform = '';
      }, 500);
    }
  };

  // ---------- START KIKI WHEN PAGE LOADS ----------
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => Kiki.init());
  } else {
    Kiki.init();
  }

  // Expose Kiki globally so you can control her from console
  window.Kiki = Kiki;
})();
