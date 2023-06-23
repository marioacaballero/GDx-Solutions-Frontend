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
}: {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setYear: React.Dispatch<React.SetStateAction<string>>;
  setMonth: React.Dispatch<React.SetStateAction<string>>;
  setDay: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const handleDateClick = (arg: any) => {
    const dateArr = arg.dateStr.split("-");
    setLoading(true);
    setYear(dateArr[0]);
    setMonth(dateArr[1]);
    setDay(dateArr[2]);
    // alert(`year: ${dateArr[0]} month: ${dateArr[1]} day: ${dateArr[2]}`);
  };

  const getCalendarHeight = () => {
    const weekCount = 6; // Ajusta el número de semanas que deseas mostrar
    const weekHeight = 40; // Ajusta la altura de cada semana según tus preferencias
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
        width: "255px",
        height: `${getCalendarHeight()}px`,
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
