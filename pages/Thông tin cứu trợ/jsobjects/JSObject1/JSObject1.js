export default {
	async getCurrentLoction () {
		var location = await appsmith.geolocation.getCurrentPosition()
		return {
			'lat' : location.coords.latitude,
			'lng' : location.coords.longitude,
			"title": "Vị trí của bạn",
			"location": "Vị trí bạn dang đứng"
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
	async getItemList () {
		return  {
			"lat": List1.selectedItem.toa_do_x,
			"lng": List1.selectedItem.toa_do_y,
			"title": List1.selectedItem.ten_sos ,
			"location": List1.selectedItem.noi_dung 
		}  ||  {};
	},
	createNhanCuuTro: async () => {
		const user = await findUser.data;

		if (!user) {
			showAlert("Không thể lấy thông tin người dùng!", "error");
			return;
		}

		const createdAt = new Date();

		if (List1.selectedItem === undefined) {
			showAlert("Vui lòng chọn yêu cầu!", "error");
			return;
		}
		if (user[0].is_san_san) {
			try {
				const uuid = UUID.genV4();
				await inseCuuTro.run({
					id: uuid.hexNoDelim || uuid.toString(),
					created_at: createdAt.toISOString(), // Đảm bảo định dạng thời gian
				});

				await changeTTCN_False.run();
				await changeNL_False.run();
				await getDataYeuCau.run();
				showAlert("Đã gửi yêu cầu thành công!", "success");
			} catch (error) {
				showAlert("Có lỗi xảy ra trong quá trình xử lý!", "error");
				console.error(error);
			}
		} else {
			showAlert("Bạn đã được điều phối không được tiếp nhận nữa!", "error");
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