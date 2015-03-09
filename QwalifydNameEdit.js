var style = "<style>.icon-chat-qne {\
		height:15px;\
		width:15px;\
		background-image:url(https://code.radiant.dj/require/icons/staff.png);\
	}</style>";
$("body").prepend(style);

API.on(API.CHAT,function(data){
	var msgid = data.cid;
	var user = data.un;
	if (user == "qwalifyd"){
		$("#chat-messages > .cm[data-cid='" + msgid + "'] .from .icon").hide();
		$("#chat-messages > .cm[data-cid='" + msgid + "'] .from").prepend("<i class='icon icon-chat-fu'></i>");
	}
});

function displayid(){
	var e = $("#user-rollover .username").text();
	var t;
	var n = API.getUsers();
	for (var i = 0; i < n.length; i++) {
		if (n[i].username == e) {
			t = n[i].id
		}
	}
	var a = "Open Sans";
	if ($("#id_display").text() == ""){
		$('#user-rollover .meta .joined').css({top:"64px"});
		$("#user-rollover .info").append('<div id="id_display" style="position:absolute; top:-21px; left:108px; color:#808691; font-size: 11px; font-family: ' + a + ', sans-serif;">ID: ' + t + "</div>");
	}else{
		if (typeof t == "undefined"){
			t = "-------";
			$("#id_display").hide();
		}else{
			$("#id_display").text("ID: " + t);
			$("#id_display").show();
		}
	}
	if (e == "qwalifyd"){
		$("#user-rollover .info .role span").text("Radiant Staff Member");
		$("#user-rollover .info .role .icon").attr("class","icon icon-chat-qne");
	}
}

$("#video-only-dj").mousemove(displayid);
$("#video-only-dj").click(displayid);
$("#chat-messages").click(displayid);
$("#user-lists").click(displayid);
$("#dj-canvas").mousemove(displayid);
$("#audience-canvas").mousemove(displayid);

API.chatLog("'Qwalifyd has been promoted to Radiant Staff!");
