let timer;
        let startTime;
        let elapsedTime = 0;
        let running = false;

        function updateDisplay() {
            const time = new Date(elapsedTime);
            const minutes = String(time.getUTCMinutes()).padStart(2, '0');
            const seconds = String(time.getUTCSeconds()).padStart(2, '0');
            const milliseconds = String(Math.floor(time.getUTCMilliseconds() / 10)).padStart(2, '0');
            document.getElementById("display").textContent = `${minutes}:${seconds}:${milliseconds}`;
        }

        function startTimer() {
            if (!running) {
                startTime = Date.now() - elapsedTime;
                timer = setInterval(() => {
                    elapsedTime = Date.now() - startTime;
                    updateDisplay();
                }, 10);
                running = true;
            }
        }

        function stopTimer() {
            clearInterval(timer);
            running = false;
        }

        function resetTimer() {
            clearInterval(timer);
            elapsedTime = 0;
            running = false;
            updateDisplay();
        }