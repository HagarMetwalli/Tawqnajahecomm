import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "../AddAdvertisement/AddAdvertisement.css";

export default function AddAdvertisement() {

  const [images, setImages] = useState([]);

  const handleImagesUpload = (e) => {
    const files = Array.from(e.target.files);

    if (files.length + images.length > 10) {
      alert("الحد الأقصى للصور هو 10");
      return;
    }

    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...newImages]);
  };

  const deleteImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <div className="add-ad-page container mt-5 pt-4 mb-5 pb-5">

      {/* العنوان */}
      <h2 className="page-title mb-4 ">
        إضافة إعلان <span>/ الرئيسية</span>
      </h2>

      <Form className="ad-form">

        {/* اسم المنتج */}
        <Form.Group className="mb-4">
          <Form.Label>اسم المنتج</Form.Label>
          <Form.Control type="text" placeholder="اسم المنتج" />
        </Form.Group>

        <Row>
          {/* السعر */}
          <Col md={6}>
            <Form.Group className="mb-4">
              <Form.Label>السعر</Form.Label>
              <Form.Control type="text" placeholder="السعر" />
            </Form.Group>
          </Col>

          {/* نسبة الخصم */}
          <Col md={6}>
            <Form.Group className="mb-4">
              <Form.Label>نسبة الخصم</Form.Label>
              <Form.Control type="text" placeholder="الخصم" />
            </Form.Group>
          </Col>
        </Row>

        {/* وصف المنتج */}
        <Form.Group className="mb-4">
          <Form.Label>وصف المنتج</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="  اكتب  وصف المنتج هنا...  "
          />
        </Form.Group>

        {/* ✨✨ إضافة الصور (الجزء اللي طلبتيه) ✨✨ */}
        <div className="images-section mb-4">
          <Form.Label>الصور (الحد الأقصى 10)</Form.Label>

          <div className="upload-box">
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImagesUpload}
              className="upload-input"
            />

            <div className="upload-content">
              <i className="fa-solid fa-cloud-arrow-up upload-icon"></i>
              <p>إضافة صور</p>
            </div>
          </div>

          {/* عرض الصور */}
          <div className="preview-images">
            {images.map((img, index) => (
              <div key={index} className="preview-item">
                <img src={img} alt="uploaded" />
                <button className="remove-btn" onClick={() => deleteImage(index)}>
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* نهاية الصور */}

        {/* زر الإرسال */}
        <Button className="submit-btn mb-5">نشر الإعلان</Button>

      </Form>
    </div>
  );
}
