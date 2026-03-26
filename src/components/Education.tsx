import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

import { educationItems } from "../data/siteContent";
import type { Locale } from "../types";
import { SectionHeading } from "./SectionHeading";

type EducationProps = {
  locale: Locale;
};

type CourseItem = {
  name: string;
  grade: string;
};

type CourseGroup = {
  title: string;
  courses: CourseItem[];
};

const parseCourseGroup = (highlight: string): CourseGroup | null => {
  const separatorIndex = highlight.indexOf(":");
  if (separatorIndex === -1) {
    return null;
  }

  const title = highlight.slice(0, separatorIndex).trim();
  const rawCourses = highlight
    .slice(separatorIndex + 1)
    .split(",")
    .map((course) => course.trim())
    .filter(Boolean);

  const courses = rawCourses
    .map((course) => {
      const match = course.match(/^(.*)\(([^()]*)\)$/);
      if (!match) {
        return null;
      }

      return {
        name: match[1].trim(),
        grade: match[2].trim(),
      };
    })
    .filter((course): course is CourseItem => course !== null);

  if (!title || courses.length === 0) {
    return null;
  }

  return { title, courses };
};

const mergeCourseGroups = (highlights: string[]): CourseGroup[] => {
  const merged = new Map<string, CourseItem[]>();

  highlights.forEach((highlight) => {
    const group = parseCourseGroup(highlight);
    if (!group) {
      return;
    }

    const existing = merged.get(group.title) ?? [];
    merged.set(group.title, [...existing, ...group.courses]);
  });

  return Array.from(merged.entries()).map(([title, courses]) => ({
    title,
    courses,
  }));
};

export function Education({ locale }: EducationProps) {
  const { t } = useTranslation();

  return (
    <section className="contentSection">
      <SectionHeading id="education" title={t("educationTitle")} />
      <div className="timelineList">
        {educationItems.map((item, index) => (
          <motion.div
            key={`${item.institution.en}-${item.period}`}
            className="timelineItem"
            initial={{ x: -24, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <div className="timelineBody">
              <p className="timelinePeriod">{item.period}</p>
              <h3>{item.institution[locale]}</h3>
              <p className="timelineSubtitle">{item.program[locale]}</p>
              <p>{item.summary[locale]}</p>
              {(() => {
                const courseGroups = mergeCourseGroups(item.highlights[locale]);

                if (courseGroups.length > 0) {
                  return (
                    <div className="courseGroupGrid">
                      {courseGroups.map((group) => (
                        <section key={group.title} className="courseGroupCard">
                          <h4>{group.title}</h4>
                          <div className="coursePillList">
                            {group.courses.map((course) => (
                              <div key={`${group.title}-${course.name}`} className="coursePill">
                                <span>{course.name}</span>
                                <span className="courseGrade">{course.grade}</span>
                              </div>
                            ))}
                          </div>
                        </section>
                      ))}
                    </div>
                  );
                }

                return (
                  <ul className="highlightList">
                    {item.highlights[locale].map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                );
              })()}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
