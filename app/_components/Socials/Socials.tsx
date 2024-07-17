import { SOCIALS } from "@/_lib/constants";
import Icon from "@/_components/Icon";

export function Socials() {
  return (
    <div className="mt-8 flex flex-col gap-2 md:flex-row">
      {SOCIALS.map((social, i) => {
        return (
          <a
            className="flex w-full items-center justify-between rounded-lg border border-neutral-200 p-4 text-neutral-800 transition-all hover:bg-neutral-100"
            href={social.url}
            key={i}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-row items-center gap-2">
              <Icon name={social.name} />
              <span>{social.name}</span>
            </div>
            <Icon name="ExternalLink" />
          </a>
        );
      })}
    </div>
  );
}
