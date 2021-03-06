/**
 * Các bước thực hiện
 * 1. Dàn layout
 * 2. Xác định dữ liệu thay đổi và lưu vào state
 * 3. Lấy data trong state đi binding ra jsx
 * 4. Duyệt mảng render danh sách sản phẩm
 * 5. Xây dựng chức năng xem chi tiết
 * 6. Xây dựng chức năng thêm vào giỏ hàng, tăng, giảm, hiển thị tổng số sp
 */
import React, { Component } from "react";
import danhSachSanPham from "./data.json"; //Import data.json
import Modal from "./Modal";
import SanPham from "./SanPham";
export default class BaiTapGioHang extends Component {
  state = {
    sanPhamChiTiet: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: 'AMOLED, 6.2", Full HD+',
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    cardList: [],
  };

  handleCardList = (sanPham) => {
    // Tìm vị trí xem nó có tồn tại hay chưa?
    const index = this.state.cardList.findIndex((card) => {
      return card.maSP === sanPham.maSP;
    });
    let cardList = [...this.state.cardList];
    if (index !== -1) {
      // Tìm thấy thì tăng số lượnglượng
      cardList[index].soLuong += 1;
    } else {
      // Ko tìm thấy thì thêm vào mảng
      const newCard = { ...sanPham, soLuong: 1 };
      cardList = [...cardList, newCard];
    }

    this.setState({
      cardList,
    });
  };

  handleSanPhamChiTiet = (sanPhamChiTiet) => {
    this.setState({
      //   sanPhamChiTiet: sanPhamChiTiet, //State ở đâu thì xét state ở đó
      sanPhamChiTiet,
    });
  };

  renderDanhSachSanPham = () => {
    return danhSachSanPham.map((sanPham, index) => {
      return (
        <div className="col-sm-4" key={index}>
          <SanPham
            product={sanPham}
            xuLyChiTiet={this.handleSanPhamChiTiet}
            handleCardList={this.handleCardList}
          />
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <div>
          <section className="container">
            <h3 className="title text-center">Bài tập giỏ hàng</h3>
            <div className="container text-center my-2">
              <button
                className="btn btn-danger "
                data-toggle="modal"
                data-target="#modelId"
              >
                Giỏ hàng (0)
              </button>
            </div>
            <div className="container danh-sach-san-pham">
              <div className="row">{this.renderDanhSachSanPham()}</div>
            </div>
            <Modal cardList={this.state.cardList} />
            <div className="row">
              <div className="col-sm-5">
                <img
                  className="img-fluid"
                  src={this.state.sanPhamChiTiet.hinhAnh}
                  alt="hinhDep"
                />
              </div>
              <div className="col-sm-7">
                <h3>Thông số kỹ thuật</h3>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Màn hình</td>
                      <td>{this.state.sanPhamChiTiet.manHinh}</td>
                    </tr>
                    <tr>
                      <td>Hệ điều hành</td>
                      <td>{this.state.sanPhamChiTiet.heDieuHanh}</td>
                    </tr>
                    <tr>
                      <td>Camera trước</td>
                      <td>{this.state.sanPhamChiTiet.cameraTruoc}</td>
                    </tr>
                    <tr>
                      <td>Camera sau</td>
                      <td>{this.state.sanPhamChiTiet.cameraSau}</td>
                    </tr>
                    <tr>
                      <td>RAM</td>
                      <td>{this.state.sanPhamChiTiet.ram}</td>
                    </tr>
                    <tr>
                      <td>ROM</td>
                      <td>{this.state.sanPhamChiTiet.rom}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
        ;
      </div>
    );
  }
}
