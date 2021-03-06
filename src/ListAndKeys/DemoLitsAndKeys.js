import React, { Component } from "react";

export default class DemoLitsAndKeys extends Component {
  danhSachKhoaHoc = ["NodeJS", "ReactJS", "VueJS"];
  // Map trả về mảng
  renderDanhSachKhoaHoc = () => {
    return this.danhSachKhoaHoc.map((khoaHoc, index) => {
      return <li key={index}>{khoaHoc}</li>;
    });
  };
  render() {
    return (
      <div>
        <h2>Demo List And Keys</h2>
        <h3>Danh Sách Khóa Học</h3>
        <ul>{this.renderDanhSachKhoaHoc()}</ul>
      </div>
    );
  }
}
