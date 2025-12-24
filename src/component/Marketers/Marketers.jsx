import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Marketers.css";

export default function Marketers() {
  return (
    <div className="marketers-page  pb-5 ">
      <Container>
        <div className="marketers-card shadow-sm pb-5 mb-5 pt-5 mt-5">

          <h3 className="marketers-title ">
            🧾 نموذج تسجيل المسوّقين المعتمدين
          </h3>

          <p className="marketers-desc">
            مرحبًا بك في برنامج المسوّقين المعتمدين بموقع طوق النجاة، الذي يمنحك
            فرصة فريدة لتحقيق دخل إضافي من خلال تسويق المنتجات والعقود.
          </p>

          <Form className="mt-4">
            {/* ================= المعلومات الشخصية ================= */}
            <h5 className="section-title">🔹 المعلومات الشخصية</h5>

            <Row className="g-3">
              <Col md={6}><Form.Control placeholder="الدولة" /></Col>
              <Col md={6}><Form.Control placeholder="المدينة" /></Col>
              <Col md={6}><Form.Control placeholder="الاسم الثلاثي" /></Col>
              <Col md={6}><Form.Control placeholder="رقم الجوال / واتساب" /></Col>
              <Col md={6}><Form.Control placeholder="البريد الإلكتروني (اختياري)" /></Col>
              <Col md={6}><Form.Control placeholder="رقم الهوية / الإقامة" /></Col>
            </Row>

            {/* ================= بيانات التسويق ================= */}
            <h5 className="section-title mt-4">💼 بيانات التسويق والعقود</h5>

            <Row className="g-3">
              <Col md={6}>
                <Form.Control placeholder="النسبة المئوية من العقود %" />
              </Col>
              <Col md={6}>
                <Form.Control placeholder="عدد الجهات المشاركة" />
              </Col>
              <Col md={6}>
                <Form.Control type="date" />
              </Col>
              <Col md={6}>
                <Form.Control placeholder="رقم الآيبان" />
              </Col>
              <Col md={6}>
                <Form.Control placeholder="اسم البنك" />
              </Col>
            </Row>

            {/* ================= الشروط ================= */}
            <h5 className="marketsection-title mt-4">📝 الشروط والأحكام</h5>
            <ul className="terms-list">
              <li>الالتزام بالمصداقية في تمثيل الموقع.</li>
              <li>العمولة تُستحق بعد اعتماد العقد فقط.</li>
              <li>التحويل خلال 10 أيام عمل.</li>
              <li>يحق للإدارة تعديل الشروط مستقبلًا.</li>
            </ul>

            {/* ================= الإقرار ================= */}
            <div className="confirm-box">
              <Form.Check
                type="checkbox"
                label="أقر بأن جميع البيانات صحيحة وأوافق على الشروط"
              />
            </div>

            {/* ================= التوقيع ================= */}
            <Row className="g-3 mt-3">
              <Col md={6}>
                <Form.Control placeholder="توقيع المسوّق" />
              </Col>
              <Col md={6}>
                <Form.Control type="date" />
              </Col>
            </Row>

            {/* ================= الأزرار ================= */}
            <div className="d-flex gap-3 mt-2">
              <Button className="marketersave-btn">تسجيل الآن</Button>
              <Button variant="light">إلغاء</Button>
            </div>
          </Form>
        </div>
      </Container>
    </div>
  );
}
