import { getNhanVien, themNhanVien } from '../pages/NhanVien/queries';

describe('Nhân viên Tests', () => {
    beforeEach(() => {
        // Setup test data
    });

    test('getNhanVien returns list of employees', async () => {
        const result = await getNhanVien();
        expect(Array.isArray(result)).toBe(true);
    });

    test('themNhanVien adds new employee', async () => {
        const newEmployee = {
            hoTen: 'Test User',
            email: 'test@example.com',
            soDienThoai: '0123456789'
        };
        const result = await themNhanVien(newEmployee);
        expect(result.success).toBe(true);
    });
}); 