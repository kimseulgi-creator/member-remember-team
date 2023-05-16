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

    //Post
    function save_remember() {
        let img = $('#img').val();
        let name = $('#aname').val();
        let mbti = $('#mbti').val();
        let blog = $('#blog').val();
        let advantages = $('#edit-advantages').val();
        let collaboration = $('#edit-collaboration').val();
        let pw = $('#pw').val();

        let formData = new FormData();
        formData.append("img_give", img);
        formData.append("name_give", name);
        formData.append("mbti_give", mbti);
        formData.append("blog_give", blog);
        formData.append("advantages_give", advantages);
        formData.append("collaboration_give", collaboration);
        formData.append("pw_give", pw);

        fetch('/post', { method: "POST", body: formData }).then((res) => res.json()).then((data) => {
            alert(data['msg']);
            window.location.reload();
        });
    }

     //  작성하기 유효성 검사
     $('.submit').click(post_check);
    //  $('.edit-submit').click(edit_check);    
 
 
     function post_check() {
         const checkImg = $('#overlay #img');
         const checkName = $('#overlay #aname');
         const checkMbti = $('#overlay #mbti');
         const checkBlog = $('#overlay #blog');
         const checkAdvantages = $('#overlay #edit-advantages');
         const checkCollaboration = $('#overlay #edit-collaboration');
         const checkPw = $('#overlay #pw');
 
         if ( !checkImg.val() ) {      //  frn의 product의 value값이 없을 때 = input에 입력한 값이 없을 때
             alert('이미지url을 입력해 주세요');
             checkImg.focus();
             return false;   //  경고창을 확인한 후 페이지가 넘어가지 않고 그대로 유지하기 위함, method빼면 못넘어감.
         } else if ( checkName.val() == 0 ) {
             alert('이름을 입력해 주세요');
             checkName.focus();
             return false;
         } else if ( !checkMbti.val() ) {
             alert('MBTI를 입력해 주세요');
             checkMbti.focus();
             return false;
         } else if ( !checkBlog.val() ) {
             alert('블로그 주소를 입력해 주세요');
             checkBlog.focus();
             return false;
         } else if ( !checkAdvantages.val() ) {
             alert('자신의 장점을 입력해 주세요');
             checkAdvantages.focus();
             return false;
         } else if ( !checkCollaboration.val() ) {
            alert('협력 스타일을 입력해 주세요');
            checkCollaboration.focus();
            return false;
         } else if ( !checkPw.val() ) {
             alert('비밀번호를 입력해 주세요');
            checkPw.focus();
            return false;
        } else {
            save_remember();
         }
     }
    
});

