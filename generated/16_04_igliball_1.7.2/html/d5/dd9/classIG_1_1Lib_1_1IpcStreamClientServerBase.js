var classIG_1_1Lib_1_1IpcStreamClientServerBase =
[
    [ "ResponseDelegate", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#adea3988ac54950f6ff47fe9bfa8a2ea1", null ],
    [ "SetMessagePreix", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#af396a379a97d198e7b9ca360a0174885", null ],
    [ "messageSeparator", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#a3ab3dc108c31f9824438f15f6d3960a9", null ],
    [ "SetMessageFalseSeparator", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#add61dfd6feeac2360921615d568f881a", null ],
    [ "CreateMessage", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#ac1ea96e2706b9a38755910bd8414bc7f", null ],
    [ "CreateResponseOrRequestString", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#a9ccda80ad06112719afd1d9a5939d1dc", null ],
    [ "InterpretRequestOrResponseLine", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#a8bfe76f6235dec1ae9bc31f656064a0f", null ],
    [ "WriteMessage", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#ad823d23fd86fb75f6f84fc8039f9494d", null ],
    [ "WorkMessage", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#a133bc4f7eae35a59cd1f565b219898ef", null ],
    [ "RespondToMessage", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#af082b7e433b7fb820a21408342708534", null ],
    [ "_lock", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#ab3a780288917fd80168a470a03b37d51", null ],
    [ "_lockGlobal", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#a154d4616fcf7f6bde7a5094b4e89db97", null ],
    [ "_sb", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#a76052729f8c75bdc29ed6d00fca79b33", null ],
    [ "_defatultOutputLevel", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#a90548472fbb366b18350b0de5ec180ec", null ],
    [ "_otputLevel", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#a7584519dfac4331dc93dd0bcbc700079", null ],
    [ "MinimalMessagePreffixLength", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#a53c6576ecd934fe6249a74f24c87a2c0", null ],
    [ "_defaultMessagePrefix", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#a35df8968c94896809b62772b44f81343", null ],
    [ "_defaultMessageSeparator", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#a5ed155434b65152a6710840c2f33cc56", null ],
    [ "_defaultMessageFalseSeparator", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#a2b458e236256e2c9a34a6fa777c48c14", null ],
    [ "_messagePrefix", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#aff4196e2609a2b519eafc767adcdd09b", null ],
    [ "_messageSeparator", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#af9030adad892fcac20969a140a852921", null ],
    [ "_messageFalseSeparator", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#a37e93cfff07b01e1a5368c48669572fd", null ],
    [ "_messagePrefixWithSeparator", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#a82b6a73c320011774950ad45d49d83af", null ],
    [ "_defaultMsgRequestBegin", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#a5d0898b1e568c18e75ad3b841935bf57", null ],
    [ "_defaultMsgRequestEnd", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#aad380a658655bc9b29598eef541757a8", null ],
    [ "_defaultMsgResponseBegin", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#afb39116c90baa5571f9a542b45c3ba75", null ],
    [ "_defaultMsgResponseEnd", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#a0231eefd554ce1cb94a6c8746df94b92", null ],
    [ "_defaultMsgTestSquare", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#a5a4f64270f55de219cf3f9cc56fe5c21", null ],
    [ "_defaultMsgTestSpeed", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#a8260f1cf566900daae501bbc32617bf2", null ],
    [ "_msgRequestBegin", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#a7e397d9e308e7b3e3d72fe92ce190d4e", null ],
    [ "_msgRequestEnd", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#a35bcd1bceee8a8e74c78deee7b3ff190", null ],
    [ "_msgResponseBegin", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#af0046ec28981e1398e384cd606063402", null ],
    [ "_msgResponseEnd", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#af87ea786a791c5723b2a7272c25737e7", null ],
    [ "_msgTestSquare", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#a46c952561a713e6fbee690b899b404c9", null ],
    [ "_msgTestSpeed", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#a760e5c1d5782a54b0cc1b3de46b367ad", null ],
    [ "_defaultStopRequest", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#a855243ac966d95b34e8d2d0cd2561ef4", null ],
    [ "_stopRequest", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#a5c3cdd8ce24a7391b6500ce35375600a", null ],
    [ "_defaultGenericResponse", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#a2f6771cb3fb1600c49c54ab33640a9a6", null ],
    [ "_genericResponse", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#ae88205498252d3389d4caea2bb9445bc", null ],
    [ "_defaultStoppedResponse", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#a07ec46f3312a93445e0e5629b1334d6f", null ],
    [ "_stoppedResponse", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#aa468d3603d8ff8b0be4c5136adbb37e3", null ],
    [ "_defaultIsMultilineResponse", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#a0afd2759e98000f17d43033f931d9171", null ],
    [ "_defaultIsMultilineRequest", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#afa35a51f7b3dc8f0a477312d9b413fe3", null ],
    [ "_isMultilineRequest", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#a331399104fadaba4ea1576f9aa38e91e", null ],
    [ "_isMultilineResponse", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#a20e11ff4827d813c8bc335c2646d6b94", null ],
    [ "Lock", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#a0b19dbda8cdf042b7c0af9812d7fcc26", null ],
    [ "LockGlobal", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#add0eac13746829cba8156c95dd813fcb", null ],
    [ "StringBuilderInternal", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#a9854380e843d5cb9d3113ae52d72e4f3", null ],
    [ "DefaultOutputLevel", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#abb35b0fa61240380db0917f36a5fcea6", null ],
    [ "OutputLevel", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#adb501c0b9ab80c76a059b7093c348423", null ],
    [ "DefaultMessagePrefix", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#adcf49dd8e3610b30535c1a3ae8748497", null ],
    [ "DefaultMessageSeparator", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#accb58f99c5079015dc61ba16b9e14fb5", null ],
    [ "DefaultMessageFalseSeparator", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#a2d724af266f26b69cb2faf9673b02b6d", null ],
    [ "MessagePrefix", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#a5c59de9797ee9c73e312175e0e4dc618", null ],
    [ "MessageSeparator", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#a03f8f8eb89f1d38d5b79aafcb6d591a1", null ],
    [ "MessageFalseSeparator", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#a9fc17c296d78989276213324e324cf39", null ],
    [ "MessagePrefixWithSeparator", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#a6aac367425ec261f69388312cf8ebf59", null ],
    [ "DefaultMsgRequestBegin", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#a82a0321b7d609e6310b1738647fb49e8", null ],
    [ "DefaultMsgRequestEnd", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#adef09d32a541bc4c13ad6f0151954ff0", null ],
    [ "DefaultMsgResponseBegin", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#aaf8078064251677d48d225883dd5add1", null ],
    [ "DefaultMsgResponseEnd", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#ab2ca3ebb1f3b7585cf266ec101cb8c56", null ],
    [ "DefaultMsgTestSquare", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#a06085c1aa95ae44b6529df64ce34270c", null ],
    [ "DefaultMsgTestSpeed", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#ada0979ae047252a82a1f3286e9321c40", null ],
    [ "MsgRequestBegin", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#a44cef87b24d765cdac4d1e552bbeac2f", null ],
    [ "MsgRequestEnd", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#a56f2c553d8440b804aecf9ad30c6d366", null ],
    [ "MsgResponseBegin", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#a8bcdc4db710a2f441b4d406ba233efa8", null ],
    [ "MsgResponseEnd", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#a1da615217277c7a8d987d387cac36f43", null ],
    [ "MsgTestSquare", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#a9ebe2f13091679396368734d2e27cdfb", null ],
    [ "MsgTestSpeed", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#a5e5131386c775806eb1b6bd071dc9192", null ],
    [ "DefaultStopRequest", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#aea606222891b7b3b9ab014243261d3a5", null ],
    [ "StopRequest", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#a22e9a945a0f4d28673667712c28f8422", null ],
    [ "DefaultGenericResponse", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#a992873677651dd6e91ce1494aa9d9c64", null ],
    [ "GenericResponse", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#a95a2c6829f471ffa8635b44c6749df84", null ],
    [ "DefaultStoppedResponse", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#adff38edfcf5192ed6744cf82cedab64e", null ],
    [ "StoppedResponse", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#aee9481d28a80327ad3845dcfe83d952c", null ],
    [ "DefaultIsMultilineResponse", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#ab6959231cf4980b2b2bd3cc3f93bbe1d", null ],
    [ "DefaultIsMultilineRequest", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#a475db7ce67d9de2bdf8f911f6d05631a", null ],
    [ "IsMultilineRequest", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#af25b846ef13a34effa1ad1c89d5ff4c4", null ],
    [ "IsMultilineResponse", "d5/dd9/classIG_1_1Lib_1_1IpcStreamClientServerBase.html#a12280d871a7abec4d615323703746eab", null ]
];