import React, { Component } from "react";

export default class SanPham extends Component {
  handleDetail = () => {
    const currentProduct = this.props.product;
    this.props.xuLyChiTiet(currentProduct);
  };
  render() {
    console.log(this.props);
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={this.props.product.hinhAnh}
          alt="hinhDep"
        />
        <div className="card-body">
          <h4 className="card-title">VinSmart Live</h4>
          <button className="btn btn-success" onClick={this.handleDetail}>
            Chi tiết
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              const currentProduct = this.props.product;
              this.props.handleCardList(currentProduct);
            }}
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
