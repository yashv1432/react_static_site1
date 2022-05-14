import react from 'react'

export default function Dropdown()
{
    let mystyle = {
        borderRadius: '20px', background: 'linear-gradient(180deg, rgba(0,210,255,1) 0%, rgba(58,144,213,1) 100%)',
        height: '60px',
        color: '#fff',
        border: 'none',
      }
      let mystyle2 = {
        borderRadius: '20px',
      }
    return(
        <>
        <section className="stepsaf">
<div class="accordion" id="accordionExample">
            <div class="accordion-item my-3 "style={mystyle2}>
              <h2 class="accordion-header" id="headingOne1">
                <button class="accordion-button collapsed btn1me fonthead1" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="false" aria-controls="collapseOne1">
                  <div className="plusme"><img src="Images/iconhire11.png" alt="" /></div>
        How UWO Affiliate Program Works?
      </button>
    </h2>
    <div id="collapseOne1" class="accordion-collapse collapse " aria-labelledby="headingOne1" data-bs-parent="#accordionExample">
      <div class="accordion-body fonthead2">
        <p>
          Make easy earnings with the UWO affiliate program. Refer
          visitors to UWO VIDEO and earn 2-10% on the sale of all UWO
          products.
        </p>
      </div>
    </div>
  </div>

  <div class="accordion-item my-3 " style={mystyle2}>
    <h2 class="accordion-header" id="headingTwo1">
      <button class="accordion-button collapsed btn1me fonthead1" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo1" aria-expanded="false" aria-controls="collapseTwo1">
        <div className="plusme"><img src="Images/iconhire11.png" alt="" /></div>
        How Much Do I Have To Pay To Join The Program?
      </button>
    </h2>
    <div id="collapseTwo1" class="accordion-collapse collapse " aria-labelledby="headingTwo1" data-bs-parent="#accordionExample">
      <div class="accordion-body fonthead2">
        <p>
          There are absolutely no costs involved in joining or being part
          of the affiliate program.
        </p>
      </div>
    </div>
  </div>

  <div class="accordion-item my-3 " style={mystyle2}>
    <h2 class="accordion-header" id="headingThree1">
      <button class="accordion-button collapsed btn1me fonthead1" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree1" aria-expanded="false" aria-controls="collapseThree1">
        <div className="plusme"><img src="Images/iconhire11.png" alt="" /></div>
        Who Can I Contact For More Information Or Help?
      </button>
    </h2>
    <div id="collapseThree1" class="accordion-collapse collapse " aria-labelledby="headingThree1" data-bs-parent="#accordionExample">
      <div class="accordion-body fonthead2">
        <ul>
          <li>
            You can contact us at +91 94796 72015 for any queries about the
            program.
          </li>
          <li>
            It usually takes between 48-72 hours for us to respond. Please
            note that we are unable to provide technical support.
          </li>
          <li>
            <strong>
              “GET STARTED BY JOINING OUR PARTNER AS UWO AFFILIATE”
            </strong>
          </li>
          <li>
            We believe you would love to become a part of this amazing
            affiliate program from UWO. Join now
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="accordion-item my-3 " style={mystyle2}>
    <h2 class="accordion-header" id="headingFour1">
      <button class="accordion-button collapsed btn1me fonthead1" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour1" aria-expanded="false" aria-controls="collapseFour1">
        <div className="plusme"><img src="Images/iconhire11.png" alt="" /></div>
        Payment Procedure
      </button>
    </h2>
    <div id="collapseFour1" class="accordion-collapse collapse " aria-labelledby="headingFour1" data-bs-parent="#accordionExample">
      <div class="accordion-body fonthead2">
        <ul>
          <li>
            An Affiliate can request a payment when their balance reaches
            a minimum balance of 25 USD.
          </li>
          <li>
            Payments can be requested in every 30 days and the processing
            can take up to 30 days from the request date.
          </li>
          <li>
            The Payments will generally be paid out via PayPal, Paytm, and
            Phone pe or bank transfer.
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="accordion-item my-3 " style={mystyle2}>
    <h2 class="accordion-header" id="headingFive1">
      <button class="accordion-button collapsed btn1me fonthead1" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive1" aria-expanded="false" aria-controls="collapseFive1">
        <div className="plusme"><img src="Images/iconhire11.png" alt="" /></div>
        Refunds
      </button>
    </h2>
    <div id="collapseFive1" class="accordion-collapse collapse " aria-labelledby="headingFive1" data-bs-parent="#accordionExample">
      <div class="accordion-body fonthead2">
        <ul>
          <li>
            In this a Customer requests a refund for a transaction for
            which the Affiliate has earned commissions, any commissions
            earned on the refund amount will be deducted from the
            Affiliate’s balance.
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="accordion-item my-3 " style={mystyle2}>
    <h2 class="accordion-header" id="headingSix1">
      <button class="accordion-button collapsed btn1me fonthead1" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix1" aria-expanded="false" aria-controls="collapseSix1">
        <div className="plusme"><img src="Images/iconhire11.png" alt="" /></div>
        Usage And Obligations
      </button>
    </h2>
    <div id="collapseSix1" class="accordion-collapse collapse " aria-labelledby="headingSix1" data-bs-parent="#accordionExample">
      <div class="accordion-body fonthead2">
        <ul>
          <li>
            Affiliates are permitted to use the UWO brand and marketing
            resources available in the Affiliates section of the UWO
            application.
          </li>
          <li>Logos and other assets cannot be modified.</li>
          <li>
            The Affiliate does not gain any trademark, copyright or any
            other rights to these materials.
          </li>
          <li>
            The Affiliate will never imply that they are acting on behalf
            of UWO and will never advertise UWO products directly.
          </li>
          <li>
            The Affiliate will never bid for advertisements that compete
            with UWO
          </li>
          <li>
            The Affiliate will never represent themselves, UWO or their
            relationship with UWO in a false or misleading way.
          </li>
          <li>
            The Affiliate will not engage in the distribution of an
            unsolicited bulk email (spam) mentioning or referencing UWO
          </li>
       
        </ul>
      </div>
    </div>
  </div>

  <div class="accordion-item my-3 " style={mystyle2}>
    <h2 class="accordion-header" id="headingSeven1">
      <button class="accordion-button collapsed btn1me fonthead1" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven1" aria-expanded="false" aria-controls="collapseSeven1">
        <div className="plusme"><img src="Images/iconhire11.png" alt="" /></div>
        Term And Terminal
      </button>
    </h2>
    <div id="collapseSeven1" class="accordion-collapse collapse" aria-labelledby="headingSeven1" data-bs-parent="#accordionExample">
      <div class="accordion-body fonthead2">
        <ul>
          <li>
            The party either party has the right to terminate the
            agreement immediately without prior notice.
          </li>
          <li>
            If the Affiliate terminates the agreement, no further
            commissions from UWO will be paid for any past or future
            customer transactions.
          </li>
          <li>
            If UWO chooses to terminate the agreement, any balance
            greater than 25 USD will be paid to the affiliate within 60
            days of termination.
          </li>
          <li>Balances those are smaller than 25 will be forfeited.</li>
          <li>
            If the Affiliate is on a recurring program, UWO will not be
            obligated for any future payments after termination.
          </li>
        </ul>
      </div>
    </div>
  </div>

</div>


</section>
        </>
    )
}