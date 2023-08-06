<template>
  <section class="AddMoviePage routerView">
    <h2 class="AddMoviePage-title">Add a new movie</h2>

    <ElForm
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
      size="default"
      status-icon
    >
      <VFormItem
        v-for="({ value, label, name, placeholder }, i) in fields"
        :label="label"
        :prop="name"
        :key="i"
      >
        <VInput v-model="ruleForm[name]" :placeholder="placeholder" />
      </VFormItem>

      <VFormItem>
        <VButton @click="submitForm(ruleFormRef)"> Create </VButton>
        <VButton @click="resetForm(ruleFormRef)">Reset</VButton>
      </VFormItem>
    </ElForm>
  </section>
</template>

<script setup>
import { reactive, ref } from "vue";

import { ElForm } from "element-plus";
import "element-plus/es/components/form/style/css";

import VForm from "@/components/VForm/index.vue";
import VFormItem from "@/components/VFormItem/index.vue";
import VInput from "@/components/VInput/index.vue";
import VButton from "@/components/VButton/index.vue";
import VNotification from "@/components/VNotification/index.vue";

const ruleFormRef = ref();

const ruleForm = ref({
  title: "",
  poster: "",
  director: "",
  year: "",
});

const fields = ref([
  {
    label: "Title",
    name: "title",
    placeholder: "Title of Movie",
  },
  {
    label: "Poster",
    name: "poster",
    placeholder: "Upload a poster",
  },
  {
    label: "Director",
    name: "director",
    placeholder: "Input director",
  },
  {
    label: "Year",
    name: "year",
    placeholder: "Input year",
  },
]);

const rules = reactive({
  title: [
    { required: true, message: "Please input movie title", trigger: "blur" },
    { min: 2, max: 50, message: "Length should be 2 to 50", trigger: "blur" },
  ],
  poster: [
    { required: true, message: "Please add a URL of poster", trigger: "blur" },
    {
      min: 10,
      max: 5000,
      message: "URL should be 10 to 5000",
      trigger: "blur",
    },
  ],
  director: [
    {
      required: true,
      message: "Please input director's name",
      trigger: "blur",
    },
    { min: 2, max: 50, message: "Length should be 2 to 50", trigger: "blur" },
  ],
  year: [
    { required: true, message: "Please input movie title", trigger: "blur" },
    { min: 4, max: 4, message: "Length should be 4", trigger: "blur" },
  ],
});

const submitForm = async (formEl) => {
  if (!formEl) {
    VNotification({
      title: "Info",
      message: "Please fill the form",
      type: "info",
    });
    return;
  }

  await formEl.validate((valid, fields) => {
    if (valid) {
      VNotification({
        title: "Success",
        message: "You have added a movie successfully",
        type: "success",
      });
    } else {
      VNotification({
        title: "Error",
        message: getMessagesFromArray(fields),
        type: "error",
      });
    }
  });
};

const resetForm = (formEl) => {
  if (!formEl) return;
  formEl.resetFields();
};

// TODO: move to helper getMessagesFromArray
function getMessagesFromArray(obj) {
  const messagesArray = [];

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      obj[key].forEach((item) => {
        messagesArray.push(item.message);
      });
    }
  }

  return messagesArray;
}
</script>

<style lang="scss" scoped>
.AddMoviePage {
  &-title {
    margin: 16px 0 72px;
  }
}
</style>
