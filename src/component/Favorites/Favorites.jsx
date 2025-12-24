import React from 'react'
import '../Favorites/Favorites.css'
import wintershirt from '../../assets/wintershirt.jpg'
import carticon from '../../assets/cartsvg.svg'

export default function Favorites() {
  return (
    <div className="p-table mt-5  mb-5">
      <div className="container mt-5 ">

        <div className="table-wrapper  pt-5">

          {/* HEADER OUTSIDE THE TABLE */}
          <div className="table-header mt-5 ">
            <span>المنتجات (2)</span>
            <span>السعر</span>
            <span>التاريخ</span>
          </div>

          <table className="table custom-table">
            <tbody>
              {[1, 2, 3].map((i) => (
                <tr key={i} className="brdr">

                  {/* PRODUCT CELL */}
                  <td>
                    <div className="prod-info">
                      <img className="shirt" src={wintershirt} alt="" />
                      <div className="prod-text">
                        <p className="prod-name">تيشيرت شتوي</p>
                        <p className="prod-rate">
                          <i className="fa fa-star"></i> 4.9
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* PRICE */}
                  <td className="cprice pt-5">100 ر.س</td>

                  {/* DATE */}
                  <td className="cdate pt-5">15/2/2025</td>

                  {/* BUTTON */}
                  <td className="cart-btn text-center">
                    <span className="text-white">إضافة للعربة</span>
                    <img src={carticon} alt="" />
                  </td>

                </tr>
              ))}
            </tbody>
          </table>

          {/* BOTTOM ACTION BUTTONS */}
          <div className="fav-actions mb-5">
            <button className="add-all">
              <img src={carticon} alt="" />
              إضافة الكل للعربة
            </button>

            <button className="delete-all">
              حذف عربة التسوق
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}
