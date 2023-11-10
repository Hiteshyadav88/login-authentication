
          document.getElementById("signin").addEventListener("click", function () {
            document.getElementById("namefield").style.maxHeight = "0";
            document.getElementById("title").innerHTML = "Sign In";
            document.getElementById("signup").classList.add("disable");
            document.getElementById("signin").classList.remove("disable");
        });

        document.getElementById("signup").addEventListener("click", function () {
            document.getElementById("namefield").style.maxHeight = "60px";
            document.getElementById("title").innerHTML = "Sign Up";
            document.getElementById("signup").classList.remove("disable");
            document.getElementById("signin").classList.add("disable");
        });

        document.getElementById("signin").addEventListener("dblclick", function () {
            document.getElementById("log-out").style.display = "block";
            document.querySelector(".main").style.display = "none";
        });

        document.getElementById("signup").addEventListener("click", function () {
            document.getElementById("log-out").style.display = "block";
            document.querySelector(".main").style.display = "none";
        });

        document.querySelector(".logout").addEventListener("click", function () {
            document.getElementById("log-out").style.display = "none";
            document.querySelector(".main").style.display = "block";
        });
        