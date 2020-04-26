$(function () {
  function buildHTML(message) {
    if ( message.image ) {
      var html =
        `<div class="chat-main__messages">
          <div class="chat-main__messages__info"></div>
          <p class="chat-main__messages__info__name">
            ${message.user_name}
          </p>
          <p class="chat-main__messages__info__date">
            ${message.created_at}
          </p>
          <p class="chat-main__messages__message">
            ${message.content}
          </p>
          <img src=${message.image} >
        </div>`
      return html;
    } else {
      var html =
        `<div class="chat-main__messages">
          <div class="chat-main__messages__info"></div>
          <p class="chat-main__messages__info__name">
            ${message.user_name}
          </p>
          <p class="chat-main__messages__info__date">
            ${message.created_at}
          </p>
          <p class="chat-main__messages__message">
            ${message.content}
          </p>
        </div>`
      return html;
    };
  }
  $("#new_message").on("submit", function (e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr("action");
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
      .done(function (data){
        var html = buildHTML(data);
        $(".messages").append(html);
        $("form")[0].reset();
        $(".messages").animate({ scrollTop: $(".messages")[0].scrollHeight });
        $(".form__submit").prop("disabled", false);
      })
      .fail(function() {
        alert("メッセージ送信に失敗しました");
      })
  })
});
  

