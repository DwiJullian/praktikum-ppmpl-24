import { expect } from 'chai';
import { tambah, kurang, kali, bagi } from './math.js'

describe('Pengujian Fungsi Matematika', function() {
    it('Fungsi Pertambahan : ', function() {
        expect(tambah(10, 5)).to.equal(15);
    });
    it('Fungsi Pengurangan : ', function() {
        expect(kurang(-10, -2)).to.equal(-8);
    });
    it('Fungsi Perkalian : ', function() {
        expect(kali(10, 5)).to.equal(50);
    });
    it('Fungsi Pembagian : ', function() {
        expect(bagi(10, 5)).to.equal(2);
    });
    it('Fungsi yang Menangani Pembagian dengan 0 : ', function() {
        expect(() => bagi(10, 0)).to.throw('Tidak bisa membagi dengan 0');
    });
    it('Fungsi Tambah yang Menangani Input String atau Null : ', function() {
        expect(() => tambah('10', null)).to.throw('Hanya bisa memasukkan angka');
    });
    it('Fungsi Kurang yang Menangani Input String atau Null : ', function() {
        expect(() => kurang('10', null)).to.throw('Hanya bisa memasukkan angka');
    });
    it('Fungsi Kali yang Menangani Input String atau Null : ', function() {
        expect(() => kali('10', null)).to.throw('Hanya bisa memasukkan angka');
    });
    it('Fungsi Bagi yang Menangani Input String atau Null : ', function() {
        expect(() => bagi('10', null)).to.throw('Hanya bisa memasukkan angka');
    });
});