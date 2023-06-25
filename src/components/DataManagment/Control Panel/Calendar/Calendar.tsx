import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import esLocale from "@fullcalendar/core/locales/es";
import style from "./Calendar.module.css";

const CalendarGDx = ({
  setLoading,
  setYear,
  setMonth,
  setDay,
  currentDate,
}: {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setYear: React.Dispatch<React.SetStateAction<string>>;
  setMonth: React.Dispatch<React.SetStateAction<string>>;
  setDay: React.Dispatch<React.SetStateAction<string>>;
  currentDate: string;
}) => {
  const handleDateClick = (arg: any) => {
    if (currentDate != arg.dateStr) {
      const dateArr = arg.dateStr.split("-");
      setLoading(true);
      setYear(dateArr[0]);
      setMonth(dateArr[1]);
      setDay(dateArr[2]);
    }
  };

  const getCalendarHeight = () => {
    const weekCount = 6;
    const weekHeight = 26;
    return weekCount * weekHeight;
  };

  const getCurrentDayCellClassNames = ({ date }: { date: Date }) => {
    const classNames: string[] = [];

    if (date.getDate() === new Date().getDate()) {
      classNames.push("current-day");
    }

    return classNames;
  };

  const customDayCellContent = (args: any) => {
    return (
      <>
        <div className="fc-daygrid-day-number">{args.dayNumberText}</div>
      </>
    );
  };

  return (
    <div
      style={{
        width: "160px",
        height: `${getCalendarHeight()}px`,
        margin: "auto",
      }}
      className={style.calendar}
    >
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        nowIndicator
        dayCellClassNames={getCurrentDayCellClassNames}
        dateClick={handleDateClick}
        locales={[esLocale]}
        locale="es"
        dayCellContent={customDayCellContent}
      />
    </div>
  );
};

export default CalendarGDx;
