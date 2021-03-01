import React from "react";

class Loader extends React.Component() {
    unction animate() {
      $("div.plasma").velocity("fadeIn", { duration: 1000 });
      $("#saberShawdow").velocity("fadeIn", { duration: 1000 });
      $(".logos").velocity("fadeIn", { duration: 1000 });
    }
  componentDidMount() {
    

    $(document).ready(function () {
      animate();
      $("#reloadAnimation").click(function () {
        $("div.plasma").velocity("fadeOut");
        $("#saberShawdow").velocity("fadeOut");
        $(".logos").velocity("fadeOut");
        animate();
      });
    });
  }
  render() {
    return (
      <div class="loadingWrapper">
        <section class="the-demo">
          <div class="example-item" id="animate">
            <div class="gradient" id="saberShawdow"></div>
            <img
              src="https://i.imgur.com/yXsHTLw.png"
              width="350"
              class="logos"
              alt=""
            />
            <div class="lightsaber">
              <label for="yoda-example"></label>
              <input type="checkbox" id="yoda-example" disabled checked />
              <div class="switch"></div>
              <div class="plasma yoda"></div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Loader;
