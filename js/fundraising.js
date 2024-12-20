const taxDocumentHtml = $(`<div id="tax-document" class="hide-scroll fill-content-parent w100">
<img src="../images/fundraiser/edited_tax_document.png" class="fill-content-child hide-scroll w100"/>
</div>`)

const calendarHtml = $(`<div id="calander class="hide-scroll fill-content-parent w100 h100">
<img src="../images/calendar1.jpg" class="hide-scroll fill-content-child w100 h100"/>
</div>`);

const couponCardHtml = $(`<div id="coupon-card class="hide-scroll fill-content-parent w100 h100">
<img src="../images/couponcard2.jpg" class="hide-scroll fill-content-child w100 h100"/>
</div>`);

const raffleHtml = $(`<div>Coming Soon</div>`);

const concessionStandHtml = $(`<div>Coming Soon</div>`);

$(document).ready(function() {
    const contentBox = $('#fundraiser-main');
    contentBox.html(taxDocumentHtml);
    $('.fundraising-nav-item[data-url="tax-document"]').addClass('__active');

    $('.fundraising-nav-item').click(function() {
        const url = $(this).data('url');

        if(url === 'tax-document') {
            contentBox.html(taxDocumentHtml);
        } else if(url == 'calendar') {
            contentBox.html(calendarHtml);
        } else if(url == 'coupon-card') {
            contentBox.html(couponCardHtml);
        } else if(url == 'raffle') {
            contentBox.html('');
        } else if(url == 'concession-stand') {
            contentBox.html('');
        } else {
            contentBox.html('');
        }

        $(this).parent().children().removeClass('__active');
        $(this).addClass('__active');
    });

    
});