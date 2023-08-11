const SkillsCard = ({ icon, title, text }) => {
  return (
    <article>
      <span className='h-16 w-16'>{icon}</span>
      <h4 className='mt-6 font-bold'>{title}</h4>
      <p className='mt-2 text-slate-500'>{text}</p>
    </article>
  );
};
export default SkillsCard;
