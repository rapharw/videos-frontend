<template>
  <CDialogBtnActivator
    :confirmation="true"
    titleDialog="Sign in"
    :action="function(){}"
    btnText="Sign in"
    btnIcon="mdi-login"
    :btnOutline="true"
    btnColor="info"
    :btnClick="() => {}"
    slot="buttons"
  >
    <p slot="content-dialog">
      <BTextField label="Login"></BTextField>
      <BTextFieldPassword label="Password"></BTextFieldPassword>
    </p>
  </CDialogBtnActivator>
</template>

<script>
import BButton from "@/components/basic/BButton.vue";
import BTextField from "@/components/basic/BTextField.vue";
import BTextFieldPassword from "@/components/basic/BTextFieldPassword.vue";
import CDialogBtnActivator from "@/components/complex/CDialogBtnActivator.vue";
export default {
  components: {
    CDialogBtnActivator,
    BTextField,
    BTextFieldPassword,
    BButton
  }
};
</script>

<style>
</style>
