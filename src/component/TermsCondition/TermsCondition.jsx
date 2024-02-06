import React, { Component } from "react";

import { Link } from "react-router-dom";
import terms from "/img/terms-banner.jpg";
import ScrolTop from "../ScrolTop/ScrolTop";

function TermsCondition(props) {
  return (
    <>
    <ScrolTop/>
    <div className="terms container mx-auto ">
      <div className="container">
        <div className="row mt-5 mb-5">
          <img src={terms} width="100%" height="100%" alt="" />
          <h1 className="text-center text-4xl font-semibold mt-3">
            Terms & Conditions
          </h1>
          <br />
          <br />
          <div>
            <b style={{ fontSize: "20px" }}> Placing an Order </b>

            <ul>
              <li>
                By Uploading your Images in your FTP Server and send the link to
                us
              </li>
              <li>
                By uploading images in our FTP server through the link provided
                by us and notify us
              </li>
              <li>
                By Uploading Images through our Web App and Shopify App from
                your Local Storage (Laptop, Personal Computer etc.)
              </li>
            </ul>
          </div>

          <div className="mt-5">
            <b style={{ fontSize: "20px" }}> Payment Method </b>

            <ul>
              <li>
                Need to Advance 30% of the payment after placing the order as
                advance.
              </li>
              <li>
                Need to Pay 30% of the payment after getting the Work in
                Progress (Processed images as per the SOP)
              </li>
              <li>
                Rest of the 40% should be paid within 1 week of getting the
                Finished Goods (Processed Images after Final Correction)
              </li>
              <li>
                Payment can be made by Visa, MasterCard, Amex, only. You warrant
                that you are an authorized user of the credit card and other
                accounts used to complete payment.
              </li>
              <li>
                All or any of the above can be waived upon discussion with our
                client management team.
              </li>
            </ul>
          </div>

          <div className="mt-5">
            <b style={{ fontSize: "20px" }}> Order Cancellation Policy </b>

            <ul>
              <li>
                Order is needed to be cancelled before we process 10 images from
                the images you provide us. If you cancel within this limit you
                will get back the amount you have paid as advance.
              </li>
              <li>
                If you cancelled your order after processing 10 images than you
                will not get any payback for your advance payment.
              </li>
              <li>
                If you cancelled order after work in progress than you need to
                pay the 60% of the Total Payment
              </li>
              <li>
                After getting the Finished Good there will be no order
                cancellation policy.
              </li>
            </ul>
          </div>

          <div className="mt-5">
            <b style={{ fontSize: "20px" }}>Faulty Policy </b>

            <p>
              We aim to provide you with products of the highest standard and
              quality. That’s why we have a Work in Progress stage so that you
              can evaluate our work carefully. You will get 48 Hours to evaluate
              Work in Progress. If there are fault or faults in our work than we
              will correct it as per your observation. Than you will get another
              chance to give your feedback or observation to recover the error.
              After that we will send you the finished goods. Once you give the
              second feedback, there will be no option for order cancellation or
              any other observation.
            </p>
          </div>

          <div className="mt-5">
            <b style={{ fontSize: "20px" }}> Limitation of Liability </b>

            <p>
              We take all precautions possible to keep the details of your
              orders and payment secure, but in the absence of negligence on our
              part, we cannot be held liable for any loss you may suffer if a
              third party acquires unauthorized access to any data you provide
              when accessing or ordering from the website.
            </p>
          </div>

          <div className="mt-5">
            <b style={{ fontSize: "20px" }}>Intellectual Property </b>

            <p>
              The KOW Company guarantees that it has not infringed or does not
              infringe or shall not infringe the IPR of any third party so far
              as related with the service(s) to be provided. The KOW Company
              shall indemnify its Clients against any costs or consequences as a
              result of such infringements.
            </p>
          </div>

          <div className="mt-5">
            <b style={{ fontSize: "20px" }}>Severability </b>

            <p>
              If any portion of the order is determined to be enforceable, the
              remainder of the order shall continue in full force and effect,
              and either party may renegotiate the terms affected by the
              severance.
            </p>
          </div>

          <div className="mt-5">
            <b style={{ fontSize: "20px" }}>Governing Law </b>

            <p>
              The whole process shall be governed and construed in accordance
              with the laws of Bangladesh.
            </p>
          </div>

          <div className="mt-5">
            <b style={{ fontSize: "20px" }}>Settlement of Dispute </b>

            <p>
              We will give our best efforts to settle amicably all disputes
              arising in connection with our clients. There will be 15 days’
              time to settle the dispute after the first written notice from the
              either parties.  If both of us are failed to an amicable
              settlement within 15 (Fifteen) days of the first written notice
              from either Party on the matter of disagreement, the parties shall
              refer the dispute to any competent court of this jurisdiction.
            </p>
          </div>

          <div className="mt-5">
            <b style={{ fontSize: "20px" }}>Assignment </b>

            <p>
              The KOW Company cannot use a third party without taking the
              consent of the client.
            </p>
          </div>

          <div className="mt-5">
            <b style={{ fontSize: "20px" }}>Notice and Communication </b>

            <p>
              All Communications should be done by the registered email address
              of the authorized representatives from both parties. The receiving
              party if so requested by the sending party without undue delay
              shall confirm any correspondence.
            </p>
          </div>

          <div className="mt-5">
            <b style={{ fontSize: "20px" }}>Confidentiality </b>

            <p>
              The KOW Company may need to disclose certain “Confidential
              Information” to its sister concerns to some extent as required.
              Confidential Information shall mean any information disclosed by a
              Party in connection with this Contract to another party (whether
              oral or written).
              <br />
              <br />
              Parties agree to hold all Confidential Information of the other in
              trust and confidence, and to protect it to the same extent as it
              would protect its own Confidential Information (which shall in any
              event be reasonable protection) and not to use such Confidential
              Information for other purposes. Unless disclosure is in compliance
              with a valid order from a court of competent jurisdiction, law
              enforcing agency or other relevant regulatory bodies or otherwise
              required by operations of the law or agreed by the other Party in
              writing, neither Party shall disclose any Confidential Information
              of the other Party, by publication or otherwise, to any person
              other than its employees and contractors bound to confidential
              obligations consistent with those set forth herein and who have a
              need to know such Confidential Information for purposes of
              exercising its rights.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default TermsCondition;
