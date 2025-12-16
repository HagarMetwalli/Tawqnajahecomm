import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./CommunityPartnerships.css";
import communityAvatar from "../../assets/communitypart.jpg"; // صورة البروفايل

export default function CommunityPartnerships() {
  return (
    <div className="community-page   pb-5">
      <Container fluid>
        <div className="community-card shadow-sm  mb-5">
          {/* ===== العنوان + صورة البروفايل تحت كلمة الشراكات ===== */}
          <header className="community-header text-end mt-3  ">
            <h4 className="fw-bold mb-3 mt-5 pt-5 pb-3" >
              إضافة شراكة مجتمعية / <span className="text-muted">الشركات</span>
            </h4>

            <div className="community-avatar-wrapper">
                <i className="fa fa-edit comm-icon"></i>
              <img
                src={communityAvatar}
                alt="صورة الجهة"
                className="community-avatar "
              />
            </div>
          </header>

          {/* ===== الفورم ===== */}
          <Form className="community-form pt-4 pb-3">
            <Row className="g-4">
              {/* العمود اليمين */}
              <Col xs={12} md={6}>
                <Form.Label className="mb-2">اسم الجهة المشاركة</Form.Label>
                <Form.Control
                  className="inputs"
                  placeholder="جهة مجتمعية"
                />

                <Form.Label className="mt-3 mb-2">نوع الجهة</Form.Label>
                <Form.Control
                  className="inputs"
                  placeholder="جهة مجتمعية"
                />

                <Form.Label className="mt-3 mb-2">
                  مجال المشاركة أو نوع الدعم
                </Form.Label>
                <Form.Control className="inputs" placeholder="00" />

                <Form.Label className="mt-3 mb-2">الحساب البنكي</Form.Label>
                <Form.Control
                  className="inputs"
                  placeholder="745127845123"
                />

                <Form.Label className="mt-3 mb-2">رقم الهاتف</Form.Label>
                <Row className="g-2 align-items-stretch">
                  <Col xs={4}>
                    <Form.Select className="keyphone-ar">
                      <option>+966</option>
                      <option>+20</option>
                    </Form.Select>
                  </Col>
                  <Col xs={8}>
                    <Form.Control
                      className="inputs"
                      placeholder="123 456 789"
                    />
                  </Col>
                </Row>

                <Form.Label className="mt-3 mb-2">
                  نبذة مختصرة عن الجهة
                </Form.Label>
                <Form.Control
                  className="inputs textarea-input"
                  as="textarea"
                  rows={3}
                  placeholder="اكتب ملاحظتك"
                />
              </Col>

              {/* العمود الشمال */}
              <Col xs={12} md={6}>
                <Form.Label className="mb-2">الدولة</Form.Label>
                <Form.Control
                  className="inputs"
                  placeholder="السعودية"
                />

                <Form.Label className="mt-3 mb-2">المدينة</Form.Label>
                <Form.Control className="inputs" placeholder="الرياض" />

                <Form.Label className="mt-3 mb-2">مدة التعاقد</Form.Label>
               <div className="radio-group custom-radio">
  <label className="radio-item">
            <span>3 أشهر</span>

    <input type="radio" name="period" />

  </label>

  <label className="radio-item">
            <span>6 أشهر</span>

    <input type="radio" name="period" />

  </label>

  <label className="radio-item">
                <span>سنة</span>

    <input type="radio" name="period" />

  </label>

  <label className="radio-item">
    <span>أخرى</span>
    <input type="radio" name="period" />
        

  </label>
</div>

                <Form.Label className="mt-3 mb-2">
                  رابط الموقع الإلكتروني
                </Form.Label>
                <Form.Control
                  className="inputs"
                  placeholder="www.http://reem.mostafa.com"
                />

                <Form.Label className="mt-3 mb-2">
                  مواقع التواصل الاجتماعي
                </Form.Label>
                <Form.Control
                  className="inputs mb-2"
                  placeholder="www.http://reem.facebook.com"
                />
                <Form.Control
                  className="inputs"
                  placeholder="إدخال الرابط"
                />

                {/* الأزرار */}
                <div className="d-flex justify-content-start mt-4 gap-3">
                  <Button className="setting-btn w-50" variant="primary">
                    حفظ الإعدادات
                  </Button>
                  <Button className="cancel-btn w-50" variant="light">
                    إلغاء
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        </div>
      </Container>
    </div>
  );
}
