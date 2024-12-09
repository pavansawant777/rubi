import React, { useEffect } from "react";
import Header from "../Header";
import { useLocation } from "react-router-dom";
export default function Privacyandpolicy(){
    let {path}=useLocation();
    useEffect(()=>{
        window.scrollTo(0, 0);

    },[path])
    return(<>
    <Header heading="Privacy & Policy"/>
    <div className="container p-5">
<div className="row">
    <div className="col-lg-12">
        <h2 className=" text-center text-dark mb-5" style={{fontWeight:"400"}}>Privacy policy</h2>
        <div className="w-100 border-danger border-top">
            <p style={{fontSize:"15px"}} className="mt-4">The official website of AUM Industries’ Ruby Kitchen-Steel-Furniture hardware manufacturing brand, alias www.ruby.in is designed and developed to provide our clients, customers and partners with virtual accessibility to our details, product catalogue and services. While any individual is accessing the website, the automated system may or may not collect certain user-end data directly or indirectly to extend the efficiency of overall user experience.</p>
       
            <p style={{fontSize:"15px"}} className="mt-4">When you use our website, you trust us with your data and Ruby Kitchen-Steel-Furniture understands the responsibility, hence we take privacy and protection of sensitive data if/and when collected seriously.Hereby, we disclose user data collection and/or storage, redirections as well as data processing, handling and protection methods that may be used.</p>
<h5 className="mt-5" style={{fontWeight:"400"}}>Personal Information</h5>
<p style={{fontSize:"15px"}} className="mt-3">Ruby Kitchen-Steel-Furniture collects and stores the personal details entered by the user in our Contact Us form to provide the user with a spontaneous response for the respective query. The information collected depends on how many fields the user has filled, and the data is stored in our server database in encrypted form to prevent any privacy breach. However, Ruby Kitchen-Steel-Furniture will not be considered responsible in case of any technical errors, third party attacks or data loss incidents that could incur anytime.</p>
<h5 className="mt-5" style={{fontWeight:"400"}}>Usage and analytics data</h5>
<p style={{fontSize:"15px"}} className="mt-3">When any user accesses www.ruby.in, our automated server features might collect information about the apps, browsers, and devices you use to accessed Ruby Kitchen-Steel-Furniture website through. We might also collect unique identifiers, browser type, device type, operating system, IP Address, active period, activity log, date, time and network as well as carrier information. All the data is meant for analytical purposes and helps us understand user preferences and choices better, so that we can provide you with better products and services in future.</p>
<h5 className="mt-5" style={{fontWeight:"400"}}>Compliance with laws
</h5>
<p style={{fontSize:"15px"}} className="mt-3">Ruby Kitchen-Steel-Furniture cooperates with government and law enforcement officials to enforce and comply with the law if and when needed. In any case of government enquiries, Ruby Kitchen-Steel-Furniture may therefore disclose personal information, usage data, message data, and any other user information without the consent of user, if we deem that it is reasonably necessary to: (a) satisfy any applicable law, regulation, legal process (such as a subpoena or court order), or enforceable governmental request; (b) enforce the Terms of Use, including investigation of potential violations thereof; (c) detect, prevent, or otherwise address fraud, security or technical issues; or (d) protect against harm to the rights, property or safety of Ruby Kitchen-Steel-Furniture, its users or the public, as required or permitted by law.</p>
<p style={{fontSize:"15px"}} className="mt-3">Finally, Ruby Kitchen-Steel-Furniture holds the rights to make changes to its privacy policy as an when needed, and the users are advised to periodically revisit for latest policy updates. In case of changes in privacy policy, all users, customers, clients, agents and/or dealers will automatically be subject to the new terms.

</p>


        </div>
    </div>
</div>
    </div>

    </>)
}