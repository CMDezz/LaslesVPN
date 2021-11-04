$(document).ready(function () {

    let customerSliderIndex = 0;

    //previous button
    $(".customer__button--previous").click(function () {
        if (customerSliderIndex <= 0) return;
        //remove actv
        removeActiveClass(customerSliderIndex);
        //add actv
        customerSliderIndex = customerSliderIndex - 1;
        addActiveClass(customerSliderIndex)

        if (customerSliderIndex >= 0) {
            $(".customer__reviews--list").animate({ scrollLeft: customerSliderIndex * 220 }, 400);
        }
    })

    //next button
    $(".customer__button--next").click(function () {
        if (customerSliderIndex >= 3) return;
        //remove actv
        removeActiveClass(customerSliderIndex);
        //add actv
        customerSliderIndex = customerSliderIndex + 1;
        addActiveClass(customerSliderIndex)

        if (customerSliderIndex >= 1) {
            $(".customer__reviews--list").animate({ scrollLeft: customerSliderIndex * 220 }, 400);
        }
    })

    //dots clicked
    let ddot = $(".customer__dots--item");
    for (let i = 0; i < ddot.length; i++) {
        $(ddot[i]).click(() => {
            //remove active class
            removeActiveClass(customerSliderIndex);
            //add active class
            customerSliderIndex = i;
            addActiveClass(customerSliderIndex)

            //scroll
            $(".customer__reviews--list").animate({ scrollLeft: customerSliderIndex * 220 }, 400);


        })
    }

    let removeActiveClass = (index) => {
        $($(".customer__reviews--item")[index]).removeClass("actv");
        $($(".customer__dots--item")[index]).removeClass("act");
    }
    let addActiveClass = (index) => {
        $($(".customer__reviews--item")[index]).addClass("actv");
        $($(".customer__dots--item")[index]).addClass("act");
    }
})

