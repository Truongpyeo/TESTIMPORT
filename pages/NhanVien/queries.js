/**
 * Lấy danh sách nhân viên
 * @return {Promise} Danh sách nhân viên từ database
 */
export async function getNhanVien() {
  return await getAllNhanVien.run();
}

/**
 * Thêm nhân viên mới
 * @param {Object} data - Thông tin nhân viên
 * @param {string} data.hoTen - Họ tên nhân viên
 * @param {string} data.email - Email nhân viên
 * @param {string} data.soDienThoai - Số điện thoại
 */
export async function themNhanVien(data) {
  return await insertNhanVien.run({ data });
} 