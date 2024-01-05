# ------------------------------

# arc72_ApprovalForAll(address,address,byte) => arc72_ApprovalForAll(address,address,bool)

/9q0UjA==/{
s/.*/byte base64(TE3rqw==)/
n
n
n
n
n
n
i\
pushint 7 // mod: push the number 7 onto the stack\
shl // mod: shift the value at the top of the stack 7 bits to the left
}

#load 12 // approval/3322
#pushint 7 // mod: push the number 7 onto the stack
#shl // mod: shift the value at the top of the stack 7 bits to the left
#itob
#substring 7 8
#concat
#log // up to 69 bytes

# ------------------------------

/_reacha_arc72_isApprovedForAll:/{
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
i\
btoi // mod: convert []byte to uint64\
pushint 7 // mod: push the number 7 onto the stack\
shl // mod: shift the value at the top of the stack 7 bits to the left\
itob // mod: convert the value at the top of the stack to a byte\
substring 7 8 // mod: take the last byte of the value at the top of the stack
}

#_reacha_arc72_isApprovedForAll:
#load 1 // GV_currentStep :: UInt
#int 3
#==
#assert
#// ^ Claim: Incorrect state: not leaf
#// at ./index.rsh:90:27:property binding
#callsub l2_LF_svsLoad_3
#byte base64(AA==)
#// resource: R_Box
#byte base64()
#byte base64(AA==)
#byte base64(AAAAAAAAAAE=)
#load 12 // v8418
#load 11 // v8419
#concat
#concat
#sha256
#callsub l3_LF_mapRef
#callsub l4_LF_fromSome
#pushint 7 // mod: push the number 7 onto the stack
#shl // mod: shift the value at the top of the stack 7 bits to the left
#itob // mod: convert the value at the top of the stack to a byte
#substring 7 8 // mod: take the last byte of the value at the top of the stack
#store 4 // GV_apiRet :: Null

# ------------------------------

/_api_arc72_setApprovalForAll2:/{
n
n
n
n
n
n
n
i\
pushint 7 // mod: push the number 7 onto the stack\
shr // mod: shift the value at the top of the stack 7 bits to the right
}

# ------------------------------

# arc72_setApprovalForAll(address,byte)void => arc72_setApprovalForAll(address,bool)void

s/cA1+og==/cTQ5Xw==/

# ------------------------------

# arc72_isApprovedForAll(address,address)byte => arc72_isApprovedForAll(address,address)bool 

s/15[/]TPw==/IXrcPQ==/

# ------------------------------

# allow overspending for box payments

/gtxns Amount/{
n
s/.*/<=/
}
