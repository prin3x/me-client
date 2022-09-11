import { Fragment } from "react";
import BlueTickIcon from "../icons/BlueTickIcon";

type Props = {};

function CompanyBenefitsList({}: Props) {
  return (
    <div className="mt-5">
      <table className="border-collapse border border-slate-300 w-full mt-8">
        <thead>
          <tr
            style={{ backgroundColor: "#0F52BA" }}
            className="text-white text-[30px]"
          >
            <th className="border border-slate-300" rowSpan={2}>
              รายการ
            </th>
            <th className="border border-slate-300" rowSpan={2}>
              รายละเอียด / จำนวนเงิน
            </th>
            <th className="border border-slate-300" colSpan={3}>
              บริษัทฯ ในเครือ
            </th>
          </tr>
          <tr style={{ backgroundColor: "#0F52BA", color: "#FFFFFF" }}>
            <th className="border border-slate-300 text-[18px] w-20">
              ME, MR, MY
            </th>
            <th className="border border-slate-300 text-[18px]  w-20">
              FB <br /> <span className="font-thin">(Back office)</span>
            </th>
            <th className="border border-slate-300 text-[18px]  w-20">
              FB <br /> <span className="font-thin">(Front)</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            style={{ backgroundColor: "rgba(22,85,183,0.1)" }}
            className="text-[24px]"
          >
            <td
              className="font-bold border border-slate-300 pl-7 text-center"
              style={{ color: "#000" }}
              colSpan={5}
            >
              สวัสดิการที่เป็นตัวเงิน
            </td>
          </tr>
          <tr className="h-full">
            <td className="border py-3 border-slate-300 px-5 font-semibold">
              <p className="mb-0 text-[24px] text-[#0F52BA] font-bold">
                เงินช่วยเหลืองานมงคลสมรส
              </p>
              <p className="mb-0 text-[17px] ">
                เพื่อช่วยเหลือพนักงานที่จัดงานมงคลสมรส
                หรือประกอบพิธีตามประเพณีอันเหมาะสม
              </p>
              <ul className="list-custom text-[17px] pl-3">
                <li>
                  หากมีการจดทะเบียนสมรสด้วย
                  พนักงานต้องนำสำเนาทะเบียนสมรสมาแสดงภายหลัง
                </li>
                <li>
                  ถ้าสามี, ภรรยาเป็นพนักงานบริษัทฯ
                  ทั้งคู่จะมีสิทธิ์ได้รับเพียงคนเดียวเท่านั้น
                </li>
                <li>เบิกได้เพียงครั้งเดียวตลอดระยะเวลาการทำงานกับบริษัทฯ</li>
              </ul>
            </td>
            <td className="border border-slate-300 p-5">
              <p className="mb-0  font-semibold">จำนวนเงิน 5,000 บาท</p>
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
          </tr>
          {/* ANOTHER */}
          <tr className="h-full">
            <td className="border py-3 border-slate-300 px-5 font-semibold">
              <p className="mb-0 text-[24px] text-[#0F52BA] font-bold">
                เงินค่าทำขวัญบุตรแรกเกิด
              </p>
              <ul className="list-custom text-[17px] pl-3">
                <li>ต้องนำสูติบัตรมาแสดง</li>
                <li>
                  ถ้าสามี, ภรรยา เป็นพนักงานบริษัทฯ ทั้งคู่ บริษัทฯ
                  จะจ่ายให้สามีเพียงผู้เดียว
                </li>
                <li>เบิกได้เพียงครั้งเดียวตลอดระยะเวลาการทำงานกับบริษัทฯ</li>
              </ul>
            </td>
            <td className="border border-slate-300  p-5">
              <p className="mb-0  font-semibold">จำนวนเงิน 2,000 บาท</p>
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
          </tr>
          {/* ANOTHER */}
          <tr className="h-full">
            <td className="border py-3 border-slate-300 px-5 font-semibold">
              <p className="mb-0 text-[24px] text-[#0F52BA] font-bold">
                เงินช่วยเหลือการเสียชีวิต
              </p>
              <ul className="list-custom text-[17px] pl-3">
                <li>ต้องนำสำเนาใบมรณบัตร และสำเนาทะเบียนบ้านมาแสดง</li>
                <li>
                  สำหรับครอบครัว บิดา มารดา คู่สมรส และบุตร
                  ที่ถูกต้องตามกฎหมายของพนักงานเท่านั้น
                </li>
              </ul>
            </td>
            <td className="border border-slate-300 text-left p-7">
              <ul className="list-custom">
                <li className="font-bold">
                  กรณีพนักงานเสียชีวิต (ในเวลา – นอกเวลางาน) <br />
                  <span className="font-thin">รายละ 100,000 บาท</span>
                </li>
                <li className="font-bold">
                  บิดา มารดา บุตร และคู่สมรสของพนักงาน <br />
                  <span className="font-thin">รายละ 5,000 บาท</span>
                </li>
                <li className="font-bold">
                  บิดา มารดาของคู่สมรส <br />
                  <span className="font-thin">รายละ 5,000 บาท</span>
                </li>
              </ul>
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
          </tr>
          {/* ANOTHER */}
          <tr className="h-full">
            <td className="border py-3 border-slate-300 px-5 font-semibold">
              <p className="mb-0 text-[24px] text-[#0F52BA] font-bold">
                เงินช่วยเหลือกรณีพนักงานทุพพลภาพ
              </p>
            </td>
            <td className="border border-slate-300 text-left p-7">
              <ul className="list-none">
                <li className="font-bold">
                  บริษัทฯ ช่วยเหลือ 150,000 บาท
                  <br />
                  <span className="font-thin">(ตามคำวินิจฉัยของแพทย์)</span>
                </li>
              </ul>
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
          </tr>
          {/* ANOTHER */}
          <tr className="h-full">
            <td className="border py-3 border-slate-300 px-5 font-semibold">
              <p className="mb-0 text-[24px] text-[#0F52BA] font-bold">
                เงินโบนัส
              </p>
            </td>
            <td className="border border-slate-300 text-left p-7">
              <ul className="list-none">
                <li className="font-bold">
                  เงินโบนัสปีละ 1 ครั้ง
                  <span className="font-thin">
                    ขึ้นอยู่กับผลประกอบการแต่ละปี
                    และผลการประเมินงานของพนักงานในรอบปีนั้นๆ
                  </span>
                </li>
              </ul>
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
          </tr>
          {/* ANOTHER */}
          <tr className="h-full">
            <td className="border py-3 border-slate-300 px-5 font-semibold">
              <p className="mb-0 text-[24px] text-[#0F52BA] font-bold">
                ตรวจสุขภาพประจำปี
              </p>
            </td>
            <td className="border border-slate-300 text-left p-7">
              <ul className="">
                <li className="font-bold">
                  ปีละ 1 ครั้ง
                  <br />
                  <span className="font-thin">
                    บริษัทฯ เป็นผู้พิจารณาจัดหาโรงพยาบาลและรายการที่ตรวจ
                  </span>
                </li>
              </ul>
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
          </tr>
          {/* ANOTHER */}
          <tr className="h-full">
            <td className="border py-3 border-slate-300 px-5 font-semibold">
              <p className="mb-0 text-[24px] text-[#0F52BA] font-bold">
                ค่ารักษาพยาบาลผู้ป่วยใน
              </p>
              <ul className="list-custom text-[17px] pl-3">
                <li>สำหรับพนักงานที่ผ่านการทดลองงาน</li>
                <li>
                  เข้ารักษาในโรงพยาบาลคู่สัญญาของบริษัทฯ (ในแต่ละปี)
                  โดยไม่ต้องสำรองค่าใช้จ่าย หรือ
                  นำใบเสร็จรับเงินและใบรับรองแพทย์มายื่นเบิกกับบริษัทฯ
                </li>
              </ul>
            </td>
            <td className="border border-slate-300 text-left p-7">
              <span className="font-thin">
                ตามกรมธรรม์ประกันสุขภาพ ที่บริษัทฯ จัดหาให้ในปีนั้นๆ
              </span>
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
          </tr>
          {/* ANOTHER */}
          <tr className="h-full">
            <td className="border py-3 border-slate-300 px-5 font-semibold">
              <p className="mb-0 text-[24px] text-[#0F52BA] font-bold">
                ค่ารักษาพยาบาลผู้ป่วยนอก
              </p>
              <ul className="list-custom text-[17px] pl-3">
                <li>สำหรับพนักงานที่ผ่านการทดลองงาน</li>
                <li>
                  เข้ารักษาในโรงพยาบาลคู่สัญญาของบริษัทฯ (ในแต่ละปี)
                  โดยไม่ต้องสำรองค่าใช้จ่าย หรือ
                  นำใบเสร็จรับเงินและใบรับรองแพทย์มายื่นเบิกกับบริษัทฯ
                </li>
              </ul>
            </td>
            <td className="border border-slate-300 text-left p-7">
              <span className="font-thin">
                ตามกรมธรรม์ประกันสุขภาพ ที่บริษัทฯ จัดหาให้ในปีนั้นๆ
              </span>
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
          </tr>
          {/* ANOTHER */}
          <tr className="h-full">
            <td className="border py-3 border-slate-300 px-5 font-semibold">
              <p className="mb-0 text-[24px] text-[#0F52BA] font-bold">
                ค่าประกันอุบัติเหตุ
              </p>
              <ul className="list-custom text-[17px] pl-3">
                <li>สำหรับพนักงานที่ผ่านการทดลองงาน</li>
                <li>
                  เข้ารักษาในโรงพยาบาลคู่สัญญาของบริษัทฯ (ในแต่ละปี)
                  โดยไม่ต้องสำรองค่าใช้จ่าย หรือ
                  นำใบเสร็จรับเงินและใบรับรองแพทย์มายื่นเบิกกับบริษัทฯ
                </li>
              </ul>
            </td>
            <td className="border border-slate-300 text-left p-7">
              <span className="font-thin">
                ตามกรมธรรม์ประกันสุขภาพ ที่บริษัทฯ จัดหาให้ในปีนั้นๆ
              </span>
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
          </tr>
          {/* ANOTHER */}
          <tr className="h-full">
            <td className="border py-3 border-slate-300 px-5 font-semibold">
              <p className="mb-0 text-[24px] text-[#0F52BA] font-bold">
                สวัสดิการซื้อสินค้าราคาพนักงาน
              </p>
              <ul className="list-custom text-[17px] pl-3">
                <li>สำหรับพนักงานที่ผ่านทดลองงาน</li>
              </ul>
            </td>
            <td className="border border-slate-300 text-left p-7">
              <ul className="">
                <li className="font-bold">
                  ซื้อสินค้าได้ในราคาพนักงาน
                  <br />
                  <span className="font-thin">ตามเกณฑ์ที่บริษัทฯ กำหนด</span>
                </li>
              </ul>
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
          </tr>
          {/* ANOTHER */}
          <tr className="h-full">
            <td className="border py-3 border-slate-300 px-5 font-semibold">
              <p className="mb-0 text-[24px] text-[#0F52BA] font-bold">
                สวัสดิการการออม
              </p>
              <ul className="list-custom text-[17px] pl-3">
                <li>
                  ต้องผ่านการทดลองงาน และได้รับการบรรจุเป็นพนักงานประจำ
                  มีอายุการทำงานเท่ากับหรือมากกว่า 5 ปีขึ้นไป{" "}
                </li>
              </ul>
              <div className="remarks flex text-[14px] pl-3 mt-3 pr-8">
                <div className="w-20">หมายเหตุ 1 :</div>
                <div className="w-full">
                  พนักงานที่พ้นสภาพการเป็นลูกจ้างด้วยเหตุเสียชีวิตหรือทุพพลภาพ
                  แต่ยังทำงานไม่ถึง 10 ปี มีสิทธิ์ได้รับเงินสวัสดิการการออม 100%
                  แม้จะยังทำงานไม่ถึง 5 ปี ก็ตาม โดยพิจารณาคิดคำนวณเงินสวัสดิการ
                  การออมจากอัตราอายุงาน
                </div>
              </div>
              <div className="remarks flex text-[14px] pl-3 mt-3 pr-8">
                <div className="w-20">หมายเหตุ 2 :</div>
                <div className="w-full">
                  ในกรณีที่พนักงานได้รับหนังสือตักเตือนเป็นลายลักษณ์อักษรจากทาง
                  HR 1 ครั้ง หรือ 1 ใบ จะถูกหักระยะเวลาการนับเงินออมไป 1 ปี
                </div>
              </div>
              <div className="text-[12px] pl-3 mt-4">
                เงื่อนไขการจ่ายเงินสวัสดิการ เป็นการโอนเข้าบัญชีเงินเดือน
                เมื่อพนักงานลาออกถูกต้องตามระเบียบบริษัทฯ
              </div>
            </td>
            <td className="border border-slate-300 text-left p-7">
              <img src="/assets/benefit-saving.png" alt="" />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <div className="text-[46px] text-[#0F52BA]">-</div>
            </td>
          </tr>
          {/* ANOTHER */}
          <tr className="h-full">
            <td className="border py-3 border-slate-300 px-5 font-semibold">
              <p className="mb-0 text-[24px] text-[#0F52BA] font-bold">
                สวัสดิการเงินช่วยเหลืองานบวช
              </p>
              <ul className="list-custom text-[17px] pl-3">
                <li>
                  พนักงานจะต้องมีอายุงาน 1 ปีขึ้นไป
                  และสามารถได้รับสิทธิ์เพียงครั้งเดียว
                </li>
              </ul>
            </td>
            <td className="border border-slate-300 text-left p-7">
              <ul className="">
                <li className="font-semibold">เงินช่วยเหลือ จำนวน 5,000 บาท</li>
              </ul>
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
               <div className="text-[46px] text-[#0F52BA]">-</div>
            </td>
          </tr>
          {/* ANOTHER */}
          <tr className="h-full">
            <td className="border py-3 border-slate-300 px-5 font-semibold">
              <p className="mb-0 text-[24px] text-[#0F52BA] font-bold">
                สวัสดิการซื้อหนังสือเพื่อพัฒนาความรู้
              </p>
              <ul className="list-custom text-[17px] pl-3">
                <li>
                  พนักงานต้องนำใบเสร็จตัวจริงมาแสดงเพื่อทำเรื่องเบิกเงิน{" "}
                  <span className="font-thin text-[14px]">
                    โดยพนักงานจะต้องนำมาสื่อสารเพื่อ
                    แบ่งปันให้เพื่อนร่วมงานในวันประชุมบริษัทฯ
                    และนำหนังสือเก็บไว้ที่แผนกหรือห้องสมุดส่วนกลางของบริษัทฯ
                  </span>
                </li>
              </ul>
            </td>
            <td className="border border-slate-300 text-left p-7">
              <ul className="">
                <li className="font-semibold">เบิกได้ 100%</li>
              </ul>
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
               <div className="text-[46px] text-[#0F52BA]">-</div>
            </td>
          </tr>
          {/* ANOTHER */}
          <tr className="h-full">
            <td className="border py-3 border-slate-300 px-5 font-semibold">
              <p className="mb-0 text-[24px] text-[#0F52BA] font-bold">
                ค่าทำงานล่วงเวลา
              </p>
            </td>
            <td className="border border-slate-300 text-left p-7">
              <ol className="list-custom">
                <li className="font-bold">
                  ทำงานล่วงเวลาในวันทำงานปกติ <br />
                  <span className="font-thin">
                    ได้รับอัตราค่าจ้าง ไม่น้อยกว่า 1.5 เท่าของอัตราค่าจ้าง/ชม.
                  </span>
                </li>
                <li className="font-bold">
                  ทำงานในวันหยุด <br />
                  <span className="font-thin">
                    ได้รับอัตราค่าจ้าง ไม่น้อยกว่า 1 เท่าของอัตราค่าจ้าง/ชม.
                  </span>
                </li>
                <li className="font-bold">
                  ทำงานล่วงเวลาในวันหยุด <br />
                  <span className="font-thin">
                    ได้รับอัตราค่าจ้าง ไม่น้อยกว่า 3 เท่าของอัตราค่าจ้าง/ชม.
                  </span>
                </li>
              </ol>
              <p className="mb-0 text-[11px]">
                * สามารถสลับวันหยุดตามประเพณีโดยใช้สิทธิ์ได้ภายในเดือน
                (ไม่สามารถใช้วันหยุดเสาร์-อาทิตย์) ** ระดับ Supervisor
                ขึ้นไปไม่ได้รับค่าล่วงเวลา
              </p>
            </td>
            <td className="border border-slate-300 text-center font-semibold">
               <div className="text-[46px] text-[#0F52BA]">-</div>
            </td>
            <td className="border border-slate-300 text-center font-semibold">
               <div className="text-[46px] text-[#0F52BA]">-</div>
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
          </tr>
          {/* ANOTHER */}
          <tr className="h-full">
            <td className="border py-3 border-slate-300 px-5 font-semibold">
              <p className="mb-0 text-[24px] text-[#0F52BA] font-bold">
                ค่าเบี้ยขยัน
              </p>
            </td>
            <td className="border border-slate-300 text-left p-7">
              <div className="font-bold text-[15px]">
                จ่ายเบี้ยขยัน 400, 500, 1,000 บาทตามลำดับ
              </div>
              <ul className="list-custom">
                <li className="font-thin">
                  ไม่ขาด ไม่ลากิจ ไม่สาย ไม่ลาไม่รับค่าจ้าง
                </li>
                <li className="font-thin">
                  ไม่ได้รับใบตักเตือน (ยกเว้นลาพักร้อน ลาวันคล้ายวันเกิด)
                </li>
              </ul>
              <p className="mb-0 text-[11px]">
                **ระดับ Supervisor ขึ้นไปไม่ได้รับค่าล่วงเวลา
              </p>
            </td>
            <td className="border border-slate-300 text-center font-semibold">
               <div className="text-[46px] text-[#0F52BA]">-</div>
            </td>
            <td className="border border-slate-300 text-center font-semibold">
               <div className="text-[46px] text-[#0F52BA]">-</div>
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
          </tr>
          {/* ANOTHER */}
          <tr className="h-full">
            <td className="border py-3 border-slate-300 px-5 font-semibold">
              <p className="mb-0 text-[24px] text-[#0F52BA] font-bold">
                ค่า Service Charge
              </p>
            </td>
            <td className="border border-slate-300 text-left p-7">
              <ul className="">
                <li className="font-bold">
                  จ่ายตามจริงจากยอดขายของร้าน
                  <br />
                  <span className="font-thin">
                    โดยมีการคำนวณตามนโยบายของบริษัทฯ
                  </span>
                </li>
              </ul>
            </td>
            <td className="border border-slate-300 text-center font-semibold">
               <div className="text-[46px] text-[#0F52BA]">-</div>
            </td>
            <td className="border border-slate-300 text-center font-semibold">
               <div className="text-[46px] text-[#0F52BA]">-</div>
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
          </tr>
          {/* ANOTHER */}
          <tr className="h-full">
            <td className="border py-3 border-slate-300 px-5 font-semibold">
              <p className="mb-0 text-[24px] text-[#0F52BA] font-bold">
                ค่าครองชีพ
              </p>
            </td>
            <td className="border border-slate-300 text-left p-7">
              <ul className="">
                <li className="font-bold">
                  1,000 บาท/เดือน
                  <br />
                  <span className="font-thin">
                    (เงื่อนไขเป็นไปตามนโยบายของบริษัทฯ) **ระดับ Supervisor
                    ขึ้นไปไม่ได้รับค่าครองชีพ
                  </span>
                </li>
              </ul>
            </td>
            <td className="border border-slate-300 text-center font-semibold">
               <div className="text-[46px] text-[#0F52BA]">-</div>
            </td>
            <td className="border border-slate-300 text-center font-semibold">
               <div className="text-[46px] text-[#0F52BA]">-</div>
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
          </tr>
          <tr
            style={{ backgroundColor: "rgba(22,85,183,0.1)" }}
            className="text-[24px]"
          >
            <td
              className="font-bold border border-slate-300 pl-7 text-center"
              style={{ color: "#000" }}
              colSpan={5}
            >
              สวัสดิการวันลา
            </td>
          </tr>
          {/* ANOTHER */}
          <tr className="h-full">
            <td className="border py-3 border-slate-300 px-5 font-semibold">
              <p className="mb-0 text-[24px] text-[#0F52BA] font-bold">
                ลาป่วย
              </p>
              <ul className="list-custom text-[17px] pl-3">
                <li>
                  พนักงานต้องยื่นใบลา หลังกลับมา 1 วัน
                  <span className="fontthin">
                    ( หากลาในระบบ TA Online ลาย้อนหลังภายใน 3 วัน )
                  </span>
                </li>
              </ul>
            </td>
            <td className="border border-slate-300 p-7">
              <p className="mb-0  font-semibold font-[17px]">
                สามารถลาได้ไม่เกิน 30 วัน โดยได้รับค่าจ้าง
              </p>
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
          </tr>
          {/* ANOTHER */}
          <tr className="h-full">
            <td className="border py-3 border-slate-300 px-5 font-semibold">
              <p className="mb-0 text-[24px] text-[#0F52BA] font-bold">
                วันหยุดพักผ่อนประจำปี
              </p>
              <ul className="list-custom text-[17px] pl-3">
                <li>
                  พนักงานประจำ ในการลาหยุดพักผ่อนประจำปีจะต้องมีอายุงานครบ 1 ปี
                </li>
                <li>
                  พนักงานสัญญาจ้าง ในการลาหยุดพักผ่อนประจำปีจะต้องมีอายุงานครบ 1
                  ปี
                  <span className="font-thin">
                    (โดยเริ่มนับครบรอบ 1 ปี ตั้งแต่ 1 มกราคม เป็นต้นไป)
                  </span>
                </li>
                <li>
                  พนักงานต้องยื่นใบลา หรือลาในระบบ TA Online ล่วงหน้า 1-5 วัน
                </li>
                <li>
                  สามารถสะสมไว้ในปีถัดไปได้ไม่เกินครึ่งหนึ่งของสิทธิ์ในปีถัดไป
                  <span className="font-thin">
                    (โดยสิทธิ์นั้นจะสามารถใช้ได้ถึง วันที่ 30 มิถุนายน
                    ของปีถัดไป)
                  </span>
                </li>
                <li>
                  ไม่อนุญาตให้ลาติดต่อกันเกิน 7 วันต่อครั้ง
                  <span className="font-thin">
                    (โดยนับรวมกับวันหยุดประจำสัปดาห์และวันหยุดประเพณีที่มีระหว่างนั้นด้วย)
                  </span>
                </li>
              </ul>
            </td>
            <td className="border border-slate-300 text-center p-5">
              <img src="/assets/benefit-holiday.png" alt="" />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
          </tr>
          {/* ANOTHER */}
          <tr className="h-full">
            <td className="border py-3 border-slate-300 px-5 font-semibold">
              <p className="mb-0 text-[24px] text-[#0F52BA] font-bold">
                ลากิจธุระจำเป็น
              </p>
              <ul className="list-custom text-[17px] pl-3">
                <li>
                  พนักงานต้องยื่นใบลา หรือลาในระบบ TA Online ล่วงหน้า
                  ไม่น้อยกว่า 1-5 วัน
                </li>
                <li>สามารถลาได้ตั้งแต่วันแรกที่เริ่มงาน</li>
              </ul>
              ตัวอย่างการลากิจ
              <ul className='font-[12px]'>
                <li>
                  - การลาเพื่อติดต่อหน่วยงานราชการต่างๆ เช่น ต่ออายุบัตรประชาชน,
                  ทำ - ต่ออายุใบขับขี่,
                  จดทะเบียนสมรส, โอนย้ายที่ดิน, แจ้งเกิด – แจ้งเสียชีวิต,
                  ทำเรื่องทะเบียนบ้าน, ทำวีซ่า, ทำพาสปอร์ต
                </li>
                <li>- ติดต่อประสานงานกับสถานีตำรวจ, ศาล</li>
                <li>­- ติดต่อทำธุระเกี่ยวกับสถานศึกษาของตนเองหรือของบุตร</li>
                <li>
                  - ติดต่อทำธุระเกี่ยวกับครอบครัว เช่น ญาติพี่น้องบวช,
                  ญาติพี่น้องแต่งงาน, ลาไปทำบุญ
                </li>
                <li>
                  - ติดต่อทำธุรกรรมทางการเงิน, สังหาริมทรัพย์และอสังหาริมทรัพย์
                </li>
                <li>
                  - ติดต่อทำธุระ กรณีเกิดอุบัติเหตุ ที่อยู่เหนือการควบคุม เช่น
                  ประสบอุบัติเหตุเกี่ยวกับยานพาหนะต่างๆ
                </li>
                <li>
                  - สถานการณ์สุดวิสัย เช่น กรณีไปต่างจังหวัด
                  แต่ขากลับตั๋วเต็มทำให้จำเป็นต้องเลื่อนวันเดินทาง
                </li>
              </ul>
            </td>
            <td className="border border-slate-300 px-5">
              <p className="mb-0  font-semibold font-[17px]">ลาได้ 7 วันต่อปี</p>
              <p>
                <span className="font-semibold">หมายเหตุ: {" "}</span> <span className="font-[14px]">การลาใดๆ ที่นอกเหนือจากตัวอย่างการลากิจ และไม่อยู่ใน
                ดุลยพินิจของหัวหน้างาน พนักงานจะต้องเลือกลาแบบพักร้อน (ถ้ามี)
                </span>  
                หรือลาแบบไม่รับค่าจ้างแทน
              </p>
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
          </tr>
          {/* ANOTHER */}
          <tr className="h-full">
            <td className="border py-3 border-slate-300 px-5 font-semibold">
              <p className="mb-0 text-[24px] text-[#0F52BA] font-bold">
                วันหยุดตามประเพณี
              </p>
            </td>
            <td className="border border-slate-300 px-5">
              <p className="mb-0  font-semibold">ปีละอย่างน้อย 13 วัน</p>
              <p>ตามประกาศของบริษัทฯ ในแต่ละปี</p>
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
          </tr>
          {/* ANOTHER */}
          <tr className="h-full">
            <td className="border py-3 border-slate-300 px-5 font-semibold">
              <p className="mb-0 text-[24px] text-[#0F52BA] font-bold">
                ลาวันคล้ายวันเกิด
              </p>
              <ul className="list-custom text-[17px] pl-3">
                <li>
                  พนักงานต้องยื่นใบลา หรือลาในระบบ TA Online ล่วงหน้าไม่น้อยกว่า
                  <br/>
                  <span className="font-thin">
                  1-5 วัน หากติดภารกิจสามารถใช้สิทธิ์ได้ภายใน 30 วัน
                  นับจากวันคล้ายวันเกิด
                  </span>
                </li>
              </ul>
            </td>
            <td className="border border-slate-300 text-left p-7">
              <p className="font-semibold">ลาได้ 1 วัน / ครั้งต่อปี</p>
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
          </tr>
          {/* ANOTHER */}
          <tr className="h-full">
            <td className="border py-3 border-slate-300 px-5 font-semibold">
              <p className="mb-0 text-[24px] text-[#0F52BA] font-bold">
                ลาเพื่อการมรณกรรมของญาติ
              </p>
              <ul className="list-custom text-[17px] pl-3">
                <li>
                  แสดงสำเนาใบมรณบัตร สำเนาทะเบียนบ้านที่มีชื่อผู้เสียชีวิต
                </li>
                <li>ยื่นใบลา หรือลาในระบบ TA Online ย้อนหลังภายใน 3 วัน</li>
              </ul>
            </td>
            <td className="border border-slate-300 text-left p-7">
              <ul className="list-custom">
                <li className="font-semibold">
                  บิดา มารดา คู่สมรส และบุตรเสียชีวิต <br />
                  <span className="font-thin">ลาได้ 6 วัน/ครั้ง</span>
                </li>
                <li className="font-semibold">
                  ปู่ ย่า ตา ยาย พี่น้องโดยตรงเสียชีวิต <br />
                  <span className="font-thin">ลาได้ 3 วัน/ครั้ง</span>
                </li>
                <li className="font-semibold">
                  บิดา มารดาของคู่สมรสเสียชีวิต
                  <br />
                  <span className="font-thin">ลาได้ 3 วัน/ครั้ง</span>
                </li>
              </ul>
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
          </tr>
          {/* ANOTHER */}
          <tr className="h-full">
            <td className="border py-3 border-slate-300 px-5 font-semibold">
              <p className="mb-0 text-[24px] text-[#0F52BA] font-bold">
                ลาเพื่อดูแล บิดา มารดา คู่สมรส หรือบุตร เจ็บป่วย
              </p>
              <ul className="list-custom text-[17px] pl-3">
                <li>
                  ยื่นใบลา หรือลาในระบบ TA Online ย้อนหลังภายใน 3 วัน
                  (ต้องมีใบรับรองแพทย์)
                </li>
              </ul>
            </td>
            <td className="border border-slate-300 text-left p-7">
              <p className="font-semibold mb-0">พนักงานมีสิทธิ์ลาได้</p>
              <p className="font-semibold mb-0">
                โดยให้เป็นไปตามข้อบังคับ ได้รับ 7 วันต่อปี
              </p>
              <p className="font-thin mb-0">
                โดยสิทธิ์และการพิจารณามาจากผู้บังคับบัญชา
              </p>
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
          </tr>
          {/* ANOTHER */}
          <tr className="h-full">
            <td className="border py-3 border-slate-300 px-5 font-semibold">
              <p className="mb-0 text-[24px] text-[#0F52BA] font-bold">
                ลาเพื่อทำหมัน
              </p>
              <ul className="list-custom text-[17px] pl-3">
                <li>
                  พนักงานมีสิทธิ์ลาเพื่อทำหมันได้ตามระยะเวลาที่แพทย์แผนปัจจุบันชั้นหนึ่งกำหนด
                  พร้อมแนบเอกสารใบรับรองแพทย์
                </li>
                <li>พนักงานจะต้องมีอายุงานไม่น้อยกว่า 1 ปี</li>
                <li>
                  พนักงานต้องยื่นใบลา หรือลาในระบบ TA Online ล่วงหน้าไม่น้อยกว่า
                  14 วัน
                </li>
              </ul>
            </td>
            <td className="border border-slate-300 text-left p-7">
              <p className="font-semibold mb-0 font-[15px]">
                ได้รับค่าจ้างตามระยะเวลาที่ลาจริง และต้องมีใบรับรองแพทย์
              </p>
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
          </tr>
          {/* ANOTHER */}
          <tr className="h-full">
            <td className="border py-3 border-slate-300 px-5 font-semibold">
              <p className="mb-0 text-[24px] text-[#0F52BA] font-bold">
                ลาเพื่อรับราชการทหาร
              </p>
              <ul className="list-custom text-[17px] pl-3">
                <li>
                  พนักงานจะต้องมีอายุงานไม่น้อยกว่า 1 ปี
                  และสามารถใช้สิทธิ์ได้เพียงครั้งเดียว
                </li>
                <li>
                  พนักงานต้องยื่นใบลา หรือลาในระบบ TA Online ล่วงหน้าไม่น้อยกว่า
                  30 วัน
                </li>
              </ul>
            </td>
            <td className="border border-slate-300 text-left p-7">
              <p className="font-semibold mb-0">พนักงานมีสิทธิ์ลา</p>
              <p className="font-thin mb-0">
                โดยได้รับค่าจ้าง ไม่เกินปีละ 60 วัน
              </p>
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
          </tr>
          {/* ANOTHER */}
          <tr className="h-full">
            <td className="border py-3 border-slate-300 px-5 font-semibold">
              <p className="mb-0 text-[24px] text-[#0F52BA] font-bold">
                ลาเพื่อรับปริญญา
              </p>
              <ul className="list-custom text-[17px] pl-3">
                <li>
                  พนักงานต้องยื่นใบลา หรือลาในระบบ TA Online ล่วงหน้าไม่น้อยกว่า
                  7 วัน พร้อมทั้งแนบหลักฐานรายละเอียด
                  และกำหนดการจากสถานศึกษามาแสดงต่อบริษัทฯ
                </li>
              </ul>
            </td>
            <td className="border border-slate-300 text-left p-7">
              <p className="font-semibold mb-0">ตลอดการเป็นพนักงาน</p>
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
               <div className="text-[46px] text-[#0F52BA]">-</div>
            </td>
          </tr>
          {/* ANOTHER */}
          <tr className="h-full">
            <td className="border py-3 border-slate-300 px-5 font-semibold">
              <p className="mb-0 text-[24px] text-[#0F52BA] font-bold">
                ลาบวช (ศาสนาพุทธ)
              </p>
              <ul className="list-custom text-[17px] pl-3">
                <li>พนักงานจะต้องมีอายุงานไม่น้อยกว่า 1 ปี</li>
                <li>
                  พนักงานต้องยื่นใบลา หรือลาในระบบ TA Online ล่วงหน้าไม่น้อยกว่า
                  30 วัน
                </li>
                <li>
                  หลังจากการลาสิกขาบทแล้วจะต้องนำหนังสือรับรองจากการอุปัชฌาย์
                  มาแสดงต่อบริษัทฯ ภายใน 7 วัน
                </li>
                <li>ลาได้ครั้งเดียวตลอดระยะเวลาการทำงานกับบริษัทฯ</li>
              </ul>
            </td>
            <td className="border border-slate-300 text-left p-7">
              <p className="mb-0 text-[15px] font-bold">ศาสนาพุทธ</p>
              <ul className="list-custom">
                <li className="font-semibold">
                  นอกพรรษา ลาได้ 30 วัน (นับรวมวันหยุด)
                  <br />
                  <span className="font-thin">โดยได้รับค่าจ้างตามปกติ</span>
                </li>
                <li className="font-semibold">
                  ในพรรษา ลาได้ 90 วัน (นับรวมวันหยุด)
                  <br />
                  <span className="font-thin">
                    โดยได้รับค่าจ้างไม่เกิน 30 วัน
                  </span>
                </li>
              </ul>
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
          </tr>
          {/* ANOTHER */}
          <tr className="h-full">
            <td className="border py-3 border-slate-300 px-5 font-semibold">
              <p className="mb-0 text-[24px] text-[#0F52BA] font-bold">
                ลาเพื่อประกอบพิธีทางศาสนา (ศาสนาคริสต์, ศาสนาอิสลาม)
              </p>
              <ul className="list-custom text-[17px] pl-3">
                <li>
                  พนักงานต้องยื่นใบลา หรือลาในระบบ TA Online ล่วงหน้าไม่น้อยกว่า
                  1 วัน พร้อมทั้งแนบเอกสารหลักฐานรายละเอียด ดังนี้
                </li>
              </ul>
              <ul className="list-custom text-[17px] pl-3">
                <li>ศาสนาอิสลาม จะต้องแนบเอกสารประกาศตามจุฬาราชมนตรี</li>
                <li>ศาสนาคริสต์ จะต้องแนบเอกสารยืนยันจากโบสถ์</li>
              </ul>
            </td>
            <td className="border border-slate-300 text-left p-7">
              <p className="mb-0 text-[15px] font-bold">ศาสนาอิสลาม</p>
              <ul className="list-circle">
                <li className="font-semibold">
                  ลาวันฮารีรายอ ครั้งละไม่เกิน 3 วัน/2 ครั้งต่อปี
                  <br />
                  <span className="font-thin">
                    (รวม 6 วันต่อปี นับรวมวันหยุด) โดยได้รับค่าจ้างตามปกติ
                  </span>
                </li>
              </ul>
              <p className="mb-0 text-[15px] font-bold">ศาสนาคริสต์</p>
              <ul className="list-circle">
                <li className="font-semibold">
                  การเข้าเงียบประจำปี ครั้งละไม่เกิน 7 วัน/2 ครั้งต่อปี
                  <br />
                  <span className="font-thin">
                    (รวม 14 วันต่อปี) สามารถลาได้ปีละ 1 ครั้ง
                  </span>
                  <br />
                  <span className="font-thin">
                    (ตามจำนวนวันที่ลาจริงจากโบสถ์) โดยได้รับค่าจ้างตามปกติ
                  </span>
                </li>
              </ul>
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
               <div className="text-[46px] text-[#0F52BA]">-</div>
            </td>
          </tr>
          {/* ANOTHER */}
          <tr className="h-full">
            <td className="border py-3 border-slate-300 px-5 font-semibold">
              <p className="mb-0 text-[24px] text-[#0F52BA] font-bold">
                ลาไปปฏิบัติธรรม
              </p>
              <ul className="list-custom text-[17px] pl-3">
                <li>พนักงานจะต้องมีอายุงานไม่น้อยกว่า 1 ปี</li>
                <li>พนักงานประจำจะได้รับสิทธิ์ในการลาเพื่อไปปฏิบัติธรรม</li>
                <li>
                  พนักงานต้องยื่นใบลา หรือลาในระบบ TA Online ล่วงหน้า
                  ไม่น้อยกว่า 14 วัน
                </li>
                <li>
                  หลังจากกลับมาจะต้องนำหนังสือรับรองจากสถานปฏิบัติธรรม
                  มาแสดงต่อบริษัทฯ ภายใน 7 วัน
                </li>
              </ul>
            </td>
            <td className="border border-slate-300 text-left p-7">
              <p className="mb-0 text-[15px] font-semibold">
                ครั้งละไม่เกิน 7 วัน / 2 ครั้งต่อปี{" "}
                <span className="font-thin"> (รวม 14 วันต่อปี)</span>
              </p>
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
          </tr>
          {/* ANOTHER */}
          <tr className="h-full">
            <td className="border py-3 border-slate-300 px-5 font-semibold">
              <p className="mb-0 text-[24px] text-[#0F52BA] font-bold">
                ลาไปสมรส
              </p>
              <ul className="list-custom text-[17px] pl-3">
                <li>
                  ต้องยื่นใบลา หรือลาในระบบ TA Online ล่วงหน้าไม่น้อยกว่า 14 วัน
                  และนำหลักฐานใบทะเบียนสมรสมาแสดงต่อบริษัทฯภายใน 7 วัน
                  นับจากวันที่กลับเข้ามาทำงาน
                </li>
              </ul>
            </td>
            <td className="border border-slate-300 text-left p-7">
              <p className="mb-0 text-[15px] font-semibold">
                ลาสมรสโดยถูกต้องตามกฎหมาย
                <p className="text-[15px] font-regualr mb-0">
                  ได้ 6 วันทำงาน โดยได้รับค่าจ้าง
                </p>
                <p className="text-[15px] font-thin mb-0"> (รวม 14 วันต่อปี)</p>
              </p>
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
               <div className="text-[46px] text-[#0F52BA]">-</div>
            </td>
          </tr>
          {/* ANOTHER */}
          <tr className="h-full">
            <td className="border py-3 border-slate-300 px-5 font-semibold">
              <p className="mb-0 text-[24px] text-[#0F52BA] font-bold">
                ลาเพื่อการคลอดบุตร
              </p>
              <ul className="list-custom text-[17px] pl-3">
                <li>
                  พนักงานสามารถลาพบแพทย์ระหว่างตั้งครรภ์ได้ 8 วัน
                  และลาคลอดบุตรได้ไม่เกิน 90 วัน
                </li>
                <li>
                  พนักงานจะได้รับค่าจ้างเท่ากับจำนวนวันที่ลา
                  <span className="font-thin">
                    ตามอัตราที่ได้รับอยู่แต่ไม่เกิน 45 วัน (นับติดต่อกัน)
                    กรณีมีใบรับรองแพทย์ระบุ และได้รับจากประกันสังคม 45 วัน
                  </span>
                </li>
                <li>
                  พนักงานจะต้องแจ้งลาผ่านผู้บังคับบัญชาของท่านเท่านั้น
                  พร้อมแนบใบรับรองแพทย์
                </li>
                <li>
                  ใช้สิทธิ์ลาล่วงหน้านับจากวันที่ระบุในสูติบัตรได้ตามใบรับรองแพทย์
                </li>
                <li>นับจำนวนวันลาต่อเนื่องรวมวันหยุด</li>
                <li>
                  หลังจากคลอดบุตรจะต้องนำสูติบัตรหรือใบรับรองการเกิดมาแสดง
                </li>
              </ul>
            </td>
            <td className="border border-slate-300 text-left p-7">
              <p className="mb-0 text-[15px] font-semibold">
                ลาได้ไม่เกิน 98 วัน{" "}
                <span className="font-thin">(นับรวมวันหยุด)</span>
              </p>
              <ul className="list-circle pl-3">
                <li>ลาพบแพทย์ระหว่างตั้งครรภ์ 8 วัน</li>
                <li>ลาคลอดบุตร 90 วัน </li>
              </ul>
              <div className="text-[13px]">
                <span className="font-semibold">หมายเหตุ:</span>{" "}
                กรณีที่ไม่ได้ใช้สิทธิ์ลาพบแพทย์ระหว่างตั้งครรภ์
                หรือสิทธิ์วันลายังคงเหลือ สามารถนำวันลารวมกับลาคลอดได้ เช่น
                ลาระหว่างตั้งครรภ์ ไปแล้วจำนวน 3 วัน คงเหลืออีก 5 วัน ให้นำ 5
                วันที่เหลือมารวมกับ 90 วัน เป็นลาคลอด 95 วัน
                โดยได้รับค่าจ้างจากบริษัทฯ 45 วัน
              </div>
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
               <div className="text-[46px] text-[#0F52BA]">-</div>
            </td>
          </tr>
          {/* ANOTHER */}
          <tr className="h-full">
            <td className="border py-3 border-slate-300 px-5 font-semibold">
              <p className="mb-0 text-[24px] text-[#0F52BA] font-bold">
                ลาเพื่อดูแลบุตร ในกรณีที่ภรรยาของพนักงานคลอดบุตร
              </p>
              <ul className="list-custom text-[17px] pl-3">
                <li>
                  พนักงานต้องยื่นใบลา หรือลาในระบบ TA Online ล่วงหน้าไม่น้อยกว่า
                  3 วัน
                </li>
                <li>
                  นำหลักฐานใบสูติบัตรของบุตรมาแสดงต่อบริษัทฯ ภายใน 15 วัน
                  นับจากวันที่กลับเข้าทำงาน
                </li>
              </ul>
            </td>
            <td className="border border-slate-300 text-left p-7">
              <p className="mb-0 text-[15px] font-semibold">
                ให้สามีซึ่งเป็นพนักงานของบริษัทฯ
                <p className="font-thin mb-0">ลากิจดังกล่าวได้ 5 วันต่อปี</p>
              </p>
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
               <div className="text-[46px] text-[#0F52BA]">-</div>
            </td>
          </tr>
          {/* ANOTHER */}
          <tr className="h-full">
            <td className="border py-3 border-slate-300 px-5 font-semibold">
              <p className="mb-0 text-[24px] text-[#0F52BA] font-bold">
                ลาเพื่อฝึกอบรมหรือพัฒนาความรู้
              </p>
              <ul className="list-custom text-[17px] pl-3">
                <li>
                  พนักงานต้องยื่นใบลา หรือลาในระบบ TA Online ล่วงหน้าไม่น้อยกว่า
                  1 วัน
                </li>
              </ul>
            </td>
            <td className="border border-slate-300 text-left p-7">
              <p className="mb-0 text-[15px] font-semibold">
                พนักงานต้องยื่นใบลา หรือลาในระบบ TA Online
                <p className="font-thin mb-0">ล่วงหน้าไม่น้อยกว่า 1 วัน</p>
              </p>
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
              <BlueTickIcon />
            </td>
            <td className="border border-slate-300 text-center font-semibold">
               <div className="text-[46px] text-[#0F52BA]">-</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CompanyBenefitsList;
