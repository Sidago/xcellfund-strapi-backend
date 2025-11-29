import type { Schema, Struct } from '@strapi/strapi';

export interface CommonBrand extends Struct.ComponentSchema {
  collectionName: 'components_common_brands';
  info: {
    displayName: 'brand';
    icon: 'landscape';
  };
  attributes: {
    alt_text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'xcellfund'>;
    link: Schema.Attribute.Component<'common.link', false>;
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface CommonButton extends Struct.ComponentSchema {
  collectionName: 'components_common_buttons';
  info: {
    displayName: 'button';
    icon: 'link';
  };
  attributes: {
    icon: Schema.Attribute.Component<'common.icon', false>;
    label: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

export interface CommonHero extends Struct.ComponentSchema {
  collectionName: 'components_common_heros';
  info: {
    description: '';
    icon: 'bars';
    name: 'hero';
  };
  attributes: {
    background_image: Schema.Attribute.Media<'images'>;
    description: Schema.Attribute.Text;
    links: Schema.Attribute.Component<'common.link', false>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CommonIcon extends Struct.ComponentSchema {
  collectionName: 'components_common_icons';
  info: {
    displayName: 'icon';
    icon: 'expand';
  };
  attributes: {
    name: Schema.Attribute.Enumeration<
      [
        'none',
        'faEnvelope',
        'faPhone',
        'faFacebookF',
        'faTwitter',
        'faInstagram',
        'faLinkedinIn',
      ]
    > &
      Schema.Attribute.DefaultTo<'none'>;
  };
}

export interface CommonInput extends Struct.ComponentSchema {
  collectionName: 'components_common_inputs';
  info: {
    displayName: 'input';
    icon: 'expand';
  };
  attributes: {
    icon: Schema.Attribute.Component<'common.icon', false>;
    label: Schema.Attribute.String;
    name: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
    required: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    type: Schema.Attribute.Enumeration<
      ['text', 'email', 'tel', 'password', 'number', 'textarea']
    > &
      Schema.Attribute.DefaultTo<'text'>;
  };
}

export interface CommonLink extends Struct.ComponentSchema {
  collectionName: 'components_common_links';
  info: {
    displayName: 'link';
    icon: 'link';
  };
  attributes: {
    aria_label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    external: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    icon: Schema.Attribute.Component<'common.icon', false>;
    label: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    target: Schema.Attribute.Enumeration<['_self', '_blank']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'_self'>;
    type: Schema.Attribute.Enumeration<['text', 'phone', 'email']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'text'>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonMenu extends Struct.ComponentSchema {
  collectionName: 'components_common_menus';
  info: {
    displayName: 'menu';
    icon: 'link';
  };
  attributes: {
    menu: Schema.Attribute.Component<'common.link', false>;
    submenu: Schema.Attribute.Component<'common.link', true>;
  };
}

export interface FooterAddress extends Struct.ComponentSchema {
  collectionName: 'components_footer_addresses';
  info: {
    description: '';
    icon: 'link';
    name: 'address';
  };
  attributes: {
    address: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    links: Schema.Attribute.Component<'common.link', true>;
  };
}

export interface FooterBranding extends Struct.ComponentSchema {
  collectionName: 'components_footer_brandings';
  info: {
    description: '';
    icon: 'bars';
    name: 'branding';
  };
  attributes: {
    brand: Schema.Attribute.Component<'common.brand', false>;
    company_description: Schema.Attribute.Text;
  };
}

export interface FooterCopyright extends Struct.ComponentSchema {
  collectionName: 'components_footer_copyrights';
  info: {
    description: '';
    icon: 'link';
    name: 'copyright';
  };
  attributes: {
    copyright_text: Schema.Attribute.Text;
    links: Schema.Attribute.Component<'common.link', true>;
  };
}

export interface FooterFooter extends Struct.ComponentSchema {
  collectionName: 'components_footer_footers';
  info: {
    description: '';
    icon: 'bars';
    name: 'footer';
  };
  attributes: {
    address: Schema.Attribute.Component<'footer.address', true>;
    branding: Schema.Attribute.Component<'footer.branding', false>;
    copyright: Schema.Attribute.Component<'footer.copyright', false>;
    quicklinks: Schema.Attribute.Component<'footer.quicklink', false>;
  };
}

export interface FooterQuicklink extends Struct.ComponentSchema {
  collectionName: 'components_footer_quicklinks';
  info: {
    description: '';
    icon: 'link';
    name: 'quicklins';
  };
  attributes: {
    heading: Schema.Attribute.String;
    links: Schema.Attribute.Component<'common.link', true>;
  };
}

export interface GlobalContact extends Struct.ComponentSchema {
  collectionName: 'components_global_contacts';
  info: {
    displayName: 'contacts';
    icon: 'attachment';
  };
  attributes: {
    background_image: Schema.Attribute.Media<'images'>;
    description: Schema.Attribute.Text;
    link: Schema.Attribute.Component<'common.link', false>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface GlobalMainmenu extends Struct.ComponentSchema {
  collectionName: 'components_global_mainmenus';
  info: {
    displayName: 'mainmenu';
    icon: 'attachment';
  };
  attributes: {
    brand: Schema.Attribute.Component<'common.brand', false>;
    menus: Schema.Attribute.Component<'common.menu', true>;
  };
}

export interface GlobalMap extends Struct.ComponentSchema {
  collectionName: 'components_global_maps';
  info: {
    displayName: 'map';
    icon: 'landscape';
  };
  attributes: {
    embed_link: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface GlobalSubscription extends Struct.ComponentSchema {
  collectionName: 'components_global_subscriptions';
  info: {
    displayName: 'subscription';
    icon: 'link';
  };
  attributes: {
    form: Schema.Attribute.Component<'subscription.form', false>;
  };
}

export interface GlobalTopnav extends Struct.ComponentSchema {
  collectionName: 'components_global_topnavs';
  info: {
    displayName: 'topnav';
    icon: 'attachment';
  };
  attributes: {
    contacts: Schema.Attribute.Component<'common.link', true>;
    socials: Schema.Attribute.Component<'common.link', true>;
  };
}

export interface SeoSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'seo';
    icon: 'database';
  };
  attributes: {
    authors: Schema.Attribute.String;
    canonical: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    keywords: Schema.Attribute.String;
    metadataBase: Schema.Attribute.String;
    og_image_url: Schema.Attribute.String;
    publisher: Schema.Attribute.String;
    siteName: Schema.Attribute.String;
    title: Schema.Attribute.String;
    twitter_creator: Schema.Attribute.String;
    web_creator: Schema.Attribute.String;
  };
}

export interface SubscriptionForm extends Struct.ComponentSchema {
  collectionName: 'components_subscription_forms';
  info: {
    displayName: 'form';
    icon: 'link';
  };
  attributes: {
    button: Schema.Attribute.Component<'common.button', false>;
    input: Schema.Attribute.Component<'common.input', false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.brand': CommonBrand;
      'common.button': CommonButton;
      'common.hero': CommonHero;
      'common.icon': CommonIcon;
      'common.input': CommonInput;
      'common.link': CommonLink;
      'common.menu': CommonMenu;
      'footer.address': FooterAddress;
      'footer.branding': FooterBranding;
      'footer.copyright': FooterCopyright;
      'footer.footer': FooterFooter;
      'footer.quicklink': FooterQuicklink;
      'global.contact': GlobalContact;
      'global.mainmenu': GlobalMainmenu;
      'global.map': GlobalMap;
      'global.subscription': GlobalSubscription;
      'global.topnav': GlobalTopnav;
      'seo.seo': SeoSeo;
      'subscription.form': SubscriptionForm;
    }
  }
}
