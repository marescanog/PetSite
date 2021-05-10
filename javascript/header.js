            // Display the navMenu only when the checkbox is checked
            function displayMenuMobile() {
                var checkBox = document.getElementById("myCheck");
                var navMenu = document.getElementById("navMenu");
                navMenu.style.display = (checkBox.checked == true) ? "block" : "none";
            }

            // Reset to default when breakpoint for mobile has been crossed
            function resetDefault(x) {
                var checkBox = document.getElementById("myCheck");
                checkBox.checked = (x.matches) ? false : true;
                displayMenuMobile();
            }
