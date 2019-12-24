<template>
    <div>
        <h1>hello web</h1>
    </div>
</template>

<script>
import JsEncrypt from 'jsencrypt';
import { observerable, subject } from '../../observer/';

let unsubscribe = observerable(subject);

export default {
    name: 'index',
    data: () => {
        return {
            name: 123,
        };
    },
    components: {},
    created() {
        console.log(this.getJsEncrypt('\n'));
        // D+UDVtk5TBCbJRV/F5ajQ+Tk5vVvxyQ5t1VpsB4XkavqownvM5oIBTwqnsg4liHoVX4yiQsw/59W4uh27i814ixgur5o7ZhYU7yckez7w4YctSTcFrzAxxJ83Yv80ym4jsyqhcy16eCPacZKGKWqzMXaQp+qj9JXiuG7haI02nw=
        console.log(this.getJsEncrypt('\n'));
        // M3ab8Zl4j69De4gtG0wyAF7qy7afqhbyr86/ewCSq70XBex7vlVnkqpKfzMIdXOHAi/M5UrSF4pk6iA+rw14Mqz6J7Nb/jToN4JjsLo761oAfpfj5/lds3tEYU1BgWkne+zWiraaBRD7+wDUSHtFQSgJLVtNgOA9xzDAy2vsG8I=
    },
    methods: {
        getJsEncrypt(str) {
            let key =
                'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCyfEuMt351kG8e2ZSN47rp95dY\nTX4rGHdGXrx+mFwm5W7VZlrmtY07QJNUJ0myQragBUiYLSNeVSysSLbNOUDBAs1i\nPcb/QG++UzmJhCDjf1+GJANHtfLI7CDaFM1aoa/7C09qWkds7n0QdpT5iLPCOS6C\nVYq5DBv5mDgUeAwleQIDAQAB\n';
            let Encrypt = new JSEncrypt();
            Encrypt.setPublicKey(key);
            return Encrypt.encrypt(str);
        },
    },
};
</script>

<style lang="less" scoped>
.main {
    height: 100px;
}
</style>
