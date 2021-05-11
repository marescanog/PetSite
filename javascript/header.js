            var header_dropDowns = document.getElementsByClassName("dropDown-title");
            var header_dropDown_arrows = document.getElementsByClassName("dropDown-arrow");
            var header_dropDown_content = document.getElementsByClassName("dropdown-content");
            
            // Display the navMenu only when the checkbox is checked
            function displayMenuMobile() {
                var checkBox = document.getElementById("myCheck");
                var navMenu = document.getElementById("navMenu");
                navMenu.style.display = (checkBox.checked == true) ? "block" : "none";
            }

            // Detects Mobile View based on browser width
            function detectMob() {
                return ( window.innerWidth <= 900 );
            }

            // Reset to default when breakpoint for mobile has been crossed
            // Default means all mobile menu options closed
            function resetDefault(x) {
                var checkBox = document.getElementById("myCheck");
                checkBox.checked = (x.matches) ? false : true;
                displayMenuMobile();
                for(i = 0; i < header_dropDown_content.length; i++){
                    header_dropDown_arrows[i].classList.remove("dropDown-arrow-expanded");
                    header_dropDown_content[i].classList.remove("display");
                }
            }

            // Expands link options ONLY when on Mobile View
            function expandMobileMenuContent(x){
                var checkBox = document.getElementById("myCheck");
                if(detectMob()){
                    header_dropDown_arrows[x].classList.toggle("dropDown-arrow-expanded");
                    header_dropDown_content[x].classList.toggle("display");
                }
            }

            var x = window.matchMedia("(max-width: 900px)")
            resetDefault(x) // Call listener function at run time
            x.addEventListener('change',resetDefault) // Attach listener function on state changes

