$(function () {
    $(document).ready(function () {
        listing();
    });

    function listing() {

        //  info Modal
        $('.content').click(function () {
            let info_modal = $('.detail-overlay');

            let $image = $(this).children('img').attr('src');
            let $name = $(this).children('h3').text();
            let $star = $(this).children('p').text();
            let $comment = $(this).children('figcaption').text();

            $('.info-image img').attr('src', `${$image}`);
            $('.info-name').text($name);
            $('.info-star').text($star);
            $('.info-comment').text($comment);

            detail_modal.css({
                'display': 'block'
            });
        });

        //   open Modal

        $('.detail').click(function () {
            let detail_modal = $('.detail-overlay');

            detail_modal.css({
                'display': 'block'
            });
        });

        //  close Modal
        $(document).click(function (e) {
            if ($('#detail').is(e.target)) {
                $('.detail-overlay').css({
                    'display': 'none'
                });
            }
        });
        //  icon hover
        $('.edit-icons .edit').hover(function () {
            $(this).attr('src', '../static/icon/pencil-filled.svg');
        }, function () {
            $(this).attr('src', '../static/icon/pencil-lined.svg');
        });

        $('.edit-icons .del').hover(function () {
            $(this).attr('src', '../static/icon/trash-can-filled.svg');
        }, function () {
            $(this).attr('src', '../static/icon/trash-can-lined.svg');
        });

    }

    //join modal
    //   share Modal

    $('.join').click(function () {
        let join_modal = $('.join-overlay');

        join_modal.css({
            'display': 'block'
        });
    });

    $('.cancel').click(function () {
        let $modal = $('.join-overlay');

        $modal.css({
            'display': 'none'
        });
    });

});

