export default {
	async checkLogin () {
		var check = appsmith.store.id_nhan_luc;
		console.log(check);
		if(check === undefined){
			showAlert("Bạn chưa đăng nhập","success");
			navigateTo('Đăng nhập');
		}

	},
}