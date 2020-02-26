var join = {

	init : function () {
		var _this = this;


	},

	save : function () {


		var data = {
			userId : $('#userId').val()
			, password : $('#password').val()
			, userName : $('#userName').val()
			, userAge : $('#userAge').val()
		};

		$.ajax({
			type: "POST"
			, url: '/api/v1/member'
			, dataType: 'json'
			, contentType: 'application/json; charset=utf-8'
			, data: JSON.stringify(data)
		}).done(function () {
			alert("회원가입이 완료되었습니다");
			window.location.href ="/";

		}).fail(function (error) {
			alert(JSON.stringify(error))
		});

	}
}