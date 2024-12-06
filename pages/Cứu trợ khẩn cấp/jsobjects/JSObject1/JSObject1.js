export default {
	async getCurrentLoction () {
		var location = await appsmith.geolocation.getCurrentPosition()
		return {
			'lat' : location.coords.latitude,
			'lng' : location.coords.longitude,
			"title": "Vị trí của bạn",
			"location": "Vị trí của bạn đang đứng"
		}
	},
	async getItemList () {
		return {} || {
			"lat": List1.selectedItem.toa_do_x,
			"lng": List1.selectedItem.toa_do_y,
			"title": List1.selectedItem.ten_sos ,
			"location": List1.selectedItem.noi_dung 
		}
	},
	async checkLogin () {
		var check = appsmith.store.id_nhan_luc;
		console.log(check);
		if(check === undefined){
			showAlert("Bạn chưa đăng nhập","success");
			navigateTo('Đăng nhập');
		}

	},
	createNhanCuuTro:async ()=>{

		const user = await findUser.data;
		const createdAt = new Date();
		if(List1.selectedItem === undefined){
			showAlert("Vui lòng chọn yêu cầu!", "error");
		}else{
			console.log(user);
			if(user[0].is_san_san === true ){
				const uuid = UUID.genV4();
				await insertCuuTro.run({
					id: uuid.hexNoDelim,
					created_at: createdAt, 
				});
				await changeTTCN_False.run();
				await changeNL_False.run();
				await getYeuCau.run();
				showAlert("Đã gửi yêu cầu thành công!", "success");
			}
			else{
				showAlert("Bạn đã được điều phối không được tiếp nhận nữa!", "error");
			}
		}

	}

	// // defaultCheck = false,
	// 
	// setDefaultTab: () => {
	// this.defaultCheck = false;
	// },

	// async getVungNguyHiemGanBan () {
	// var dataNguyHiem = await getCanhBao.run();
	// return dataNguyHiem.data;
	// }


}