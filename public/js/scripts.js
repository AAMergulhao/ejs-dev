$(document).ready(()=>{
    $(".preloader-background")
                    .delay(1700)
                    .fadeOut("slow");
    $(".preloader-wrapper")
                    .delay(1700)
                    .fadeOut();
    $('.dropdown-trigger')
    .dropdown(
        {
        alignment: 'left',
        hover: false,
        belowOrigin: true
        }
    );
    $('.tabs').tabs(
        {
        swipeable : true,
        responsiveThreshold : 1920
        }
    );
    $('.tooltipped').tooltip();
});

function preLoader(time){
  var html = `
              <div class="preloader-background">
                        <div class="preloader-wrapper big active">
                            <div class="spinner-layer spinner-green">
                                <div class="circle-clipper left">
                                    <div class="circle"></div>
                                </div>
                                <div class="gap-patch">
                                    <div class="circle"></div>
                                </div>
                                <div class="circle-clipper right">
                                    <div class="circle"></div>
                                </div>
                            </div>

                            <div class="spinner-layer spinner-blue">
                                <div class="circle-clipper left">
                                    <div class="circle"></div>
                                </div>
                                <div class="gap-patch">
                                    <div class="circle"></div>
                                </div>
                                <div class="circle-clipper right">
                                    <div class="circle"></div>
                                </div>
                            </div>

                            <div class="spinner-layer spinner-yellow">
                                <div class="circle-clipper left">
                                    <div class="circle"></div>
                                </div>
                                <div class="gap-patch">
                                    <div class="circle"></div>
                                </div>
                                <div class="circle-clipper right">
                                    <div class="circle"></div>
                                </div>
                            </div>

                            <div class="spinner-layer spinner-red">
                                <div class="circle-clipper left">
                                    <div class="circle"></div>
                                </div>
                                <div class="gap-patch">
                                    <div class="circle"></div>
                                </div>
                                <div class="circle-clipper right">
                                    <div class="circle"></div>
                                </div>
                            </div>
                        </div>
                    </div>`
  $(html).appendTo('body');

  $(".preloader-background")
                    .delay(time)
                    .fadeOut("slow");
  $(".preloader-wrapper")
                    .delay(time)
                    .fadeOut();
};