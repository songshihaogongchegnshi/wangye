
    const steps = [...document.querySelectorAll('.step')];
    const hint = document.getElementById('hint');
    const storyTitle = document.getElementById('storyTitle');
    const progressDots = [...document.querySelectorAll('.progress-dot')];
    const progressLines = [...document.querySelectorAll('.progress-line')];
    const titles = [
      '朱奕瑄，今天是不是有一点难过？',
      '我在这里，先陪你缓一缓',
      '朱朱，给你准备了一份小礼物',
      '花、烟花，还有一份小小心意',
      '朱朱，今天也要对自己温柔一点'
    ];
    let current = 0;
    steps.forEach((step, index) => {
      const button = step.querySelector('button');
      if (!button) return;
      button.addEventListener('click', () => {
        if (index !== current) return;
        if (index === steps.length - 1) {
          button.textContent = '收到就好，慢慢来';
          hint.textContent = '这份安慰一直在这里';
          return;
        }
        step.classList.remove('active');
        current += 1;
        steps[current].classList.add('active');
        storyTitle.textContent = titles[current];
        progressDots[current - 1].classList.remove('active');
        progressDots[current - 1].classList.add('done');
        progressDots[current].classList.add('active');
        progressLines[current - 1].classList.add('done');
        hint.textContent = ['点击“是”，安慰就开始啦','拥抱已经送到啦，点击继续','打开礼物，看看里面有什么','花、烟花和礼物都准备好了','安慰送到了，愿你轻松一点'][current];
      });
    });
    document.getElementById('restart').addEventListener('click', () => window.location.reload());
  
