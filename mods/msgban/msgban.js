


$this.ban_msg = async function(msg_path=null){
	const banned = await bandb.bans.put({msgid: msg_path});
}

$this.msg_is_banned = async function(msg_path=null){
	const isbanned = await bandb.bans.get({msgid: msg_path})
	if (isbanned){
		return true
	}else{
		return false
	}
}

