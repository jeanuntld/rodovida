(() => {
  jQuery(document).ready(function() {
      jQuery('.btn-scene-2').click(function() {
          event.stopPropagation(); 
          jQuery('.cards__card').removeClass('active');
          jQuery(this).closest('.cards__card').addClass('active');
          jQuery(".cards").addClass("opened");
      });

      jQuery('.btn-scene-3').click(function() {
          event.stopPropagation(); 
          jQuery('.cards__card').removeClass('active');

          var radioButtons = document.querySelectorAll('.tracking-form input');
          var indexToActivate = jQuery('.btn-scene-3').index(this);

          if (indexToActivate >= 0 && indexToActivate < radioButtons.length) {
            radioButtons[indexToActivate].checked = true;
          }

          jQuery('.tracking-form button').click();
      });

      jQuery(document).click(function() {
          jQuery('.cards__card').removeClass('active');
          jQuery('.cards__success-modal').removeClass('show');
          jQuery(".cards").removeClass("opened");
      });

      // document.getElementById('add-event-link').addEventListener('click', function() {
      //   const eventTitle = "Dia do resultado - #VOTEPELOTRANSITO";
      //   const eventDate = new Date('2022-09-18T00:00:00-03:00'); // Data e horário do evento no fuso de Brasília
  
      //   const calendarUrl = `data:text/calendar;charset=utf-8,` +
      //     `BEGIN:VCALENDAR%0A` +
      //     `VERSION:2.0%0A` +
      //     `BEGIN:VEVENT%0A` +
      //     `SUMMARY:${encodeURIComponent(eventTitle)}%0A` +
      //     `DTSTART:${eventDate.toISOString()}%0A` +
      //     `DTEND:${eventDate.toISOString()}%0A` +
      //     `END:VEVENT%0A` +
      //     `END:VCALENDAR%0A`;
  
      //   window.open(calendarUrl);
      // });

      function getRemainingDays() {
        const now = new Date();
        const targetDate = new Date("2023-09-18T00:00:00-03:00");
        
        const timeDifference = targetDate - now;
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        
        return days;
      }
      
      function updateCountdown() {
        const remainingDays = getRemainingDays();
        document.getElementById("countdown").innerHTML = `${remainingDays} DIAS`;
      }
      
      setInterval(updateCountdown, 86400000); // Atualiza a cada dia (86400000 milissegundos)
      
      updateCountdown();
  });
})();