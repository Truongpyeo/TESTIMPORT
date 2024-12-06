export default {
	generatePasswordHash: async () => {
		var password_hash = dcodeIO.bcrypt.hashSync(input_pass.text, 10);
		console.log(password_hash);
		return password_hash;
	},


	createToken: async (user) => {
		var token = jsonwebtoken.sign(user, 'secret');
		await storeValue("token_nhan_su", token);
		// await storeValue("id_admin", 11111);
		return token;
	},
	async checkLogin () {
		var check = appsmith.store.id_nhan_luc;
		console.log(check);
		if(check){
			showAlert("Bạn đã đăng nhập","success");
			navigateTo('Thông tin cá nhân');
		}

	},
	comparePassword: async (password, hash) => {
		return dcodeIO.bcrypt.compareSync(password, hash)
	},

	actionLogin: async () => {
		try{
			const [user] = await finNhanLucs.run();
			var check = await this.comparePassword(input_pass.text, user.password);
			storeValue("id_nhan_luc", user.id);
			if(check) {
				// user.token = await this.createToken(user)
				// .then( async () => await UpdateToken.run(user));
				showAlert("Đăng nhập thành công", "success");
				navigateTo('Thông tin cứu trợ');
			} else {
				showAlert("Email hoặc mật khẩu không đúng", "error");
			}
		}catch(error){
			showAlert("Email hoặc mật khẩu không đúng", "error");
		}
	},
}