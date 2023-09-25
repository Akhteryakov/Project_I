import React from "react";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t, i18n } = useTranslation("aboutePage");

  return (
    <div>
      <h1>{t("О нас")}</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
        officiis voluptatem suscipit eum qui enim ex beatae totam delectus
        perspiciatis! Nobis tempora doloribus voluptas velit a optio iusto.
        Repellat molestiae deleniti sunt sed quas, cum iste, et ex temporibus
        hic ut harum odio eveniet enim! Repellat laboriosam sint modi natus eius
        expedita sit iste exercitationem facilis quas. Enim impedit aperiam,
        nihil veritatis ratione rerum velit aspernatur rem minima perferendis
        ullam minus, saepe soluta odio eaque. Quia quas eius perferendis eaque
        porro quasi ipsam nam! Quae facere fugiat accusantium tempora ut vel,
        sit obcaecati eius molestiae fugit quas, quidem labore quam!
      </p>
    </div>
  );
};

export default AboutPage;
