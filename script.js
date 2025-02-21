// Radio button data
const videoQualities = [
    { id: 'auto', label: 'Ask each time', value: 'auto' },
    { id: '1080p', label: 'Full HD (1080p)', value: '1080p' },
    { id: '720p', label: 'High (720p)', value: '720p' },
    { id: '480p', label: 'Standard (480p)', value: '480p' },
    { id: '144p', label: 'Low (144p)', value: '144p' }
];

// Create audio context for feedback
let audioContext;
function initAudioContext() {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
}

// Play confirmation sound
function playConfirmationSound() {
    if (!audioContext) return;
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(880, audioContext.currentTime); // A5 note
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
}

// Create radio buttons
function createRadioGroup(container, isOriginal = true) {
    const group = container.querySelector('.radio-group');
    if (!group) return;

    videoQualities.forEach((quality, index) => {
        const option = document.createElement('div');
        option.className = 'radio-option';
        option.setAttribute('role', 'radio');
        option.setAttribute('aria-checked', 'false');
        option.setAttribute('tabindex', index === 0 ? '0' : '-1');
        option.setAttribute('data-value', quality.value);
        option.id = `${isOriginal ? 'original' : 'redesigned'}-${quality.id}`;

        const circle = document.createElement('div');
        circle.className = 'radio-circle';
        
        const label = document.createElement('span');
        label.textContent = quality.label;
        
        option.appendChild(circle);
        option.appendChild(label);
        group.appendChild(option);

        // Set initial state for 720p option
        if (quality.value === '720p') {
            selectOption(option, group, !isOriginal); // Only play sound for redesigned version
        }
    });

    // Add event listeners
    setupRadioGroupEvents(group, !isOriginal); // Only add sound to redesigned version
}

// Set up event listeners for a radio group
function setupRadioGroupEvents(group, playSound = false) {
    const options = group.querySelectorAll('.radio-option');
    
    options.forEach(option => {
        // Click handler
        option.addEventListener('click', () => selectOption(option, group, playSound));
        
        // Keyboard handler
        option.addEventListener('keydown', (e) => {
            switch(e.key) {
                case ' ':
                case 'Enter':
                    e.preventDefault();
                    selectOption(option, group, playSound);
                    break;
                case 'Tab':
                    // Let the default tab behavior work
                    break;
                default:
                    e.preventDefault();
                    break;
            }
        });

        // Focus handler
        option.addEventListener('focus', () => {
            options.forEach(opt => {
                if (opt !== option) {
                    opt.setAttribute('tabindex', '-1');
                }
            });
            option.setAttribute('tabindex', '0');
        });
    });

    // Handle tab order
    group.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            const currentFocus = document.activeElement;
            if (currentFocus && currentFocus.classList.contains('radio-option')) {
                const options = Array.from(group.querySelectorAll('.radio-option'));
                const currentIndex = options.indexOf(currentFocus);
                
                if (!e.shiftKey && currentIndex === options.length - 1) {
                    // Last option, let natural tab order proceed
                    return;
                }
                if (e.shiftKey && currentIndex === 0) {
                    // First option, let natural tab order proceed
                    return;
                }
                
                e.preventDefault();
                const nextIndex = !e.shiftKey ? 
                    (currentIndex + 1) % options.length : 
                    (currentIndex - 1 + options.length) % options.length;
                options[nextIndex].focus();
            }
        }
    });
}

// Select a radio option
function selectOption(selectedOption, group, playSound = false) {
    const options = group.querySelectorAll('.radio-option');
    
    options.forEach(option => {
        const circle = option.querySelector('.radio-circle');
        if (option === selectedOption) {
            option.setAttribute('aria-checked', 'true');
            option.setAttribute('tabindex', '0');
            circle.classList.add('selected');
            option.focus(); // Ensure the selected option has focus
            // Announce selection to screen readers
            announceSelection(option.textContent);
            // Play sound for redesigned version
            if (playSound) {
                playConfirmationSound();
            }
        } else {
            option.setAttribute('aria-checked', 'false');
            option.setAttribute('tabindex', '-1');
            circle.classList.remove('selected');
        }
    });
}

// Announce selection to screen readers
function announceSelection(optionText) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.textContent = `Selected: ${optionText}`;
    document.body.appendChild(announcement);
    setTimeout(() => announcement.remove(), 1000);
}

// Table of Contents scroll handling
function handleTableOfContents() {
    const sections = document.querySelectorAll('section[id]');
    const tocLinks = document.querySelectorAll('.table-of-contents a');
    
    function setActiveLink() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 100) {
                currentSection = section.getAttribute('id');
            }
        });
        
        tocLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', setActiveLink);
    setActiveLink(); // Set initial state
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Initialize audio context
    document.addEventListener('click', initAudioContext, { once: true });
    
    const originalDemo = document.querySelector('.component-demo.original');
    const redesignedDemo = document.querySelector('.component-demo.redesigned');
    
    if (originalDemo) createRadioGroup(originalDemo, true);
    if (redesignedDemo) createRadioGroup(redesignedDemo, false);

    // Initialize table of contents
    handleTableOfContents();
}); 