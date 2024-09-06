// Timeline animation on scroll
document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.2 });
  
    timelineItems.forEach(item => observer.observe(item));
  });
  
   
  // Heading animation
  function headingAnimation() {
    var h1 = document.querySelector('h1 .name');
    var h1Text = h1.textContent;
    
    var splittedText = h1Text.split('');
    var halfValue = Math.ceil(splittedText.length / 2);  
    var clutter = '';
  
    splittedText.forEach(function(elem, idx) {
      if (idx < halfValue) { 
        clutter += `<span class="first">${elem}</span>`;
      } else {
        clutter += `<span class="second">${elem}</span>`;
      }
    });
  
    h1.innerHTML = clutter;
  }
  
  headingAnimation();
  
  gsap.from("h1 .first", {
    y: 80,
    opacity: 0,
    duration: 0.6,
    delay: 0.5,
    stagger: 0.15
  });
  
  gsap.from("h1 .second", {
    y: 80,
    opacity: 0,
    duration: 0.6,
    delay: 0.5,
    stagger: -0.15
  });
  
  
  document.addEventListener('DOMContentLoaded', function() {
    const timeline = document.querySelector('.timeline');
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    function updateTimeline() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        
        timelineItems.forEach((item, index) => {
            const itemTop = item.offsetTop;
            const itemHeight = item.offsetHeight;
            
            if (scrollPosition > itemTop - windowHeight + itemHeight / 2) {
                item.classList.add('active');
                timeline.style.height = `${(index + 1) * 100 / timelineItems.length}%`;
            } else {
                item.classList.remove('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateTimeline);
    window.addEventListener('resize', updateTimeline);
    updateTimeline();
  });