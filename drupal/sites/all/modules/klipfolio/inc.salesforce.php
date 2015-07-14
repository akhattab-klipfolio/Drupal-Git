<?php

define("SALESFORCE_OID",'00D400000007ANz');

global $sfCustomFields;
global $sfLeadSourceMap;

$sfCustomFields = array(
    "reason" => "00N40000001d21l",
    "product" => "00N40000001cnuW",
    "division" => "00N40000001d22T",
    "users" => "00N40000001d2AT",
    "heard_from" => "00N40000001d2AU",
    "page_source" => "00N40000001gMdP",
    "purchase_url" => "00N40000002F2gx",
    "dev_edition" => "00N40000002GGzS",
    "role" => "00N40000002oIv3",
    "tech_expertise" => "00N40000002oJ6Q",
    "data_sources" => "00N40000002Ewi4",
    "biz_issues" => "00N40000002oJ6k",
    "cloud" => "00N40000002GGzN",
    "bi_experience" => "00N40000002oJ6p",
    "competitors" => "00N40000002F5yf"
);

$sfLeadSourceMap = array(
    "download" => "Website Download",
    "contact" => "Website Contact",
    "download-offer" => "Website Offer"
);

$sfProductMap = array(
    "kfe" => "Klipfolio Enterprise",
    "kfga" => "Klipfolio for Google Analytics",
    "kfde" => "Klipfolio Developer Edition",
    "kfcc" => "Klipfolio Call Center Dashboard"
);

function sfHandleShadowBoxLead( $product )
{
	global $sfCustomFields;
	global $sfLeadSourceMap;


	if($product=="developer edition")
    {
        $dev_edition="1";
        $product = "";
    }
	else $dev_edition="0";
	// split name..
	list($first,$last) = explode(" ",$_POST['f_name'],2);

	$data['first_name'] = ucwords($first);
	$data['last_name'] = ucwords($last);
	$data['email'] = $_POST['f_email'];
	$data['company'] = $_POST['f_company'];
	$data['phone'] = $_POST['f_phone'];
	$data['lead_source'] = $sfLeadSourceMap[$_POST['action']];	
	$data['description'] = $_POST['f_comment'];

	$data[ $sfCustomFields['reason'] ] = $_POST['f_reason'];
	$data[ $sfCustomFields['product'] ] = $product;
	$data[ $sfCustomFields['dev_edition'] ] = $dev_edition;
	$data[ $sfCustomFields['heard_from'] ] = $_POST['f_heardfrom'];	
	$data[ $sfCustomFields['users'] ] = $_POST['f_users'];
	$data[ $sfCustomFields['page_source'] ] = $_POST['source'];	
	



	
	sfWeb2Lead($data);
}


/**
 * pulls out generic/common fields from POST data and merges in an optional
 * data array which is then sent to salesforce
 * @return 
 * @param object $data[optional]
 */
function sfHandleGeneric( $product = false, $optData = false )
{
	global $sfCustomFields;
	global $sfLeadSourceMap;	
	
	list($first,$last) = explode(" ",$_POST['f_name'],2);

	$data['first_name'] = ucwords($first);
	$data['last_name'] = ucwords($last);
	$data['email'] = $_POST['f_email'];
	$data['company'] = $_POST['f_company'];
	$data['phone'] = $_POST['f_phone'];
	$data['lead_source'] = $sfLeadSourceMap[$_POST['action']];	
	$data['description'] = $_POST['f_comment'];

	if ( $product ) $data[ $sfCustomFields['product'] ] = $product;

	$data[ $sfCustomFields['reason'] ] = $_POST['f_reason'];
	$data[ $sfCustomFields['heard_from'] ] = $_POST['f_heardfrom'];	
	$data[ $sfCustomFields['users'] ] = $_POST['f_users'];
	$data[ $sfCustomFields['page_source'] ] = $_POST['source'];	
	
	//if ($optData) $data = array_merge($data,$optData);
//echo $_POST['f_heardfrom'];
//	print_r($data);
//	exit;
	
	
	sfWeb2Lead($data);	
	
}


/**
 * handles the contact form submission to salesforce.  
 * this method is product-specific. 
 *  
 * @return 
 * @param object $product
 */

function sfHandleContact($product)
{
	global $sfCustomFields;
	global $sfLeadSourceMap;

	// split name..
	list($first,$last) = explode(" ",$_POST['f_name'],2);

	$data['first_name'] = ucwords($first);
	$data['last_name'] = ucwords($last);
	$data['email'] = $_POST['f_email'];
	$data['company'] = $_POST['f_company'];
	$data['phone'] = $_POST['f_phone'];
	$data['lead_source'] = $sfLeadSourceMap[$_POST['action']];	
	$data['description'] = $_POST['f_comment'];

	$data[ $sfCustomFields['reason'] ] = $_POST['f_reason'];
	$data[ $sfCustomFields['product'] ] = $product;
	$data[ $sfCustomFields['heard_from'] ] = $_POST['f_heardfrom'];	
	$data[ $sfCustomFields['users'] ] = $_POST['f_users'];
	$data[ $sfCustomFields['page_source'] ] = $_POST['source'];	
	
	sfWeb2Lead($data);	
}


/**
 * sends a Web2Lead request to salesforce.com, using serence's 
 * customer ID
 *
 * @param data hashmap of key-values that should map to salesforce fields
 */
function sfWeb2Lead( $data, $debugEmail = false )
{
	// inject oid into data
	$data['oid'] = SALESFORCE_OID;
	$data['retURL'] = "";
	
	if ($debugEmail)
	{
		$data['debug'] = '1';
		$data['debugEmail'] = $debugEmail;
	}
	

	// build request data
	// -------------------
	$req = "";
	
	foreach($data as $k => $v )
	{
		$req .= "&$k=" . trim(urlencode($v));
	}
	

	$header  = "POST /servlet/servlet.WebToLead?encoding=UTF-8 HTTP/1.0\r\n";
	$header .= "Content-Type: application/x-www-form-urlencoded\r\n";
	$header .= "Host: www.salesforce.com\r\n";
	$header .= "Content-Length: " . strlen($req) . "\r\n\r\n";	
	

	$fp = fsockopen ('www.salesforce.com', 80, $errno, $errstr, 30);

	if (!$fp) {
		echo "No connection made";
	} else {
		fputs ($fp, $header . $req);
		while (!feof($fp)) {
			$res = fgets ($fp, 1024);
			//echo $res;
		}
	}
	fclose($fp);

}

?>
