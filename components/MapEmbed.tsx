export function MapEmbed() {
  return (
    <div className="w-full h-64 rounded-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.683237691652!2d-6.21395104831374!3d53.396635278545666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670fd0cbb98613%3A0x332fde4a5227594d!2sCol%C3%A1iste%20Dh%C3%BAlaigh%20CDCFE!5e1!3m2!1sen!2sie!4v1672433658200!5m2!1sen!2sie"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="CDCFE Location"
      ></iframe>
    </div>
  )
}
